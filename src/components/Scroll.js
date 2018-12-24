import React from 'react';


// props.children; //cardlist is the children here, that was passed in 
const Scroll = (props) =>{
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    )
}


export default Scroll;


// style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}  for scrollable component 