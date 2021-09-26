import React from "react"

// function TodoList(props) {
//     return (
//         <div className="app"> 
//           <input type="checkbox" name="item" />
//           <p className="checkbox-item">{props.data.text}</p>
//         </div>
//     )

// }

class ToDoList extends React.Component {
  render() {
      return (
        <div className="app"> 
        <input type="checkbox" name="item" />
        <p className="checkbox-item">{this.props.data.text}</p>
      </div>
      )
  }
}

export default ToDoList;