
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
  }
  render() {
    const toDoComponents = this.state.todos.map(data => <ToDoItem key={data.id} data={data}/>)

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

