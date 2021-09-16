import React from 'react';


const Scroll = (props) => {
return(
   <div style={{overflowY: 'scroll', height: '600px', }} className=' bw1 ba b--black'>
   {props.children}
   </div>
	);

};

export default Scroll;