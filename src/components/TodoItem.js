import { render } from "@testing-library/react";

function TodoList(props) {
    return (
        <div className="app"> 
          <input type="checkbox" name="item" />
          <p className="checkbox-item">{props.data.text}</p>
        </div>
    )

}

// class toDoList extends React.Component {
//   render() {
//       return (
//         //stuff here
//       )
//   }
// }

export default TodoList;