import React from 'react';

const Card = ({name,email,id})=> {
	
	return(

		<div className = 'tc bg-light-green dib br4 bw1 ba b--dark-green  ma2 pa2 grow  shadow-5' > 
		<img alt={name} src= {`https://robohash.org/${id}?200x200`}/>
		<div>
		<h2>{name}</h2>
		<p>{email}</p>
		</div>	
		</div>);
}
export default Card;