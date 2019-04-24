import React from 'react';
import App from '.../App';


function Form(props){
    return (
        <div className="form">
        <input type="text" placeholder="...todo" onChange={props.handleChanges}>{props.propsForm}</input>
        <button>Add Todo</button>
        <button>Clear Completed</button>
        
        </div>
    );
}
export default Form;