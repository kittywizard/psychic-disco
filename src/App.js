
import ToDoItem from "./components/TodoItem";
import Header from "./components/Header";
import toDoData from "./toDoData";
import React from "react";

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

