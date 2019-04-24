import React from 'react';
import Todo from './components/TodoComponents/Todo';
//import Form from './components/TodoComponents/TodoForm';
class App extends React.Component {

  constructor(){
    super();
    this.state = {
      newItem: '',
      list: []
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!!</h2>
      
      <h1>Todo List: MVP</h1>
      <div className="todo-list">
      <Form />
      
      </div>
      </div>

    );
  }
}

// handleChanges = event => {
//   this.setState({
//     todo: {
//       ...this.state.todo,
//       [event.target.name]: event.target.value
//     }
//   })
// };


function Form(props){
  return (
      <div className="form">
      <input type="text" placeholder="...todo" >{props.propsForm}</input>
      <button>Add Todo</button>
      <button>Clear Completed</button>
      
      </div>
  );
}
export default App;
