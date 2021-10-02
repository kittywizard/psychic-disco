
import ToDoItem from "./components/TodoItem";
import Header from "./components/Header";
import toDoData from "./toDoData";
import React from "react";

/**
 * Challenge: 
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: toDoData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
        this.setState(prevState => {
          const updatedToDos = prevState.todos.map(item => {
              if(item.id === id){
                  return {
                    ...item,
                    completed: !item.completed
                  }
              }
              return item;
              });

              return {
                todos: updatedToDos
              }
          });

  }

  render() {
    const toDoComponents = this.state.todos.map(data => <ToDoItem key={data.id} data={data} handleChange={this.handleChange}/>)

    return (
      <div className="container">
        <Header />
        <div className="list-container">
          {toDoComponents}
        </div>
      </div>
  
    );

  }
  
}

export default App;

