import React from 'react';
import 'tachyons';


const Searchbox = ({searchChange})=> {
	return (

		<input className ='pa2 br3 tc bw1 bg-light-blue ba b--blue '
		type='search'
		 placeholder='Search Robots'
         onChange={searchChange}
		 />
		);
}

export default Searchbox;