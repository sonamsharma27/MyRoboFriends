import React, {Component} from 'react';
import Cardlist from './Cardlist.js';

import Scroll from './Scroll';
import 'tachyons';
import Searchbox from './Searchbox';
import {robots} from './robots.js';

class App extends Component 
{
	constructor()
	{ super();
	 this.state = {
	robots: robots,
	searchfield: ''
		}
	}
	componentDidMount() //kinda keyword
	{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response=> response.json()) //need to return response...using single line in this case and therefore no need to use return keyword
       .then(user=>{this.setState({robots: user});
       });
	}

	onSearchChange=(event)=>{
		this.setState({	searchfield: event.target.value});

	}
	render(){
		const filteredRobots = this.state.robots.filter(robot=>
{
	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
})
		if(this.state.robots.length===0)
			{return(<h1>Loading......</h1>);}
				else
				{
					return(
          <div className=' tc  '>
		  <h1 className='f1 grow '>RoboFriends</h1>
		  <Searchbox searchChange={this.onSearchChange}/>
		  <Scroll>
		  
		  <Cardlist robots={filteredRobots}/>
          
          </Scroll>
          </div>
		);
				}
		

	}
	
}


export default App;