import React from "react"

function ToDoList(props) {
    return (
        <div className="app"> 
          <input type="checkbox" 
                name="item" 
                checked={props.data.completed}
                onChange={() => {
                  props.handleChange(props.data.id);
                }}
                />
          <p className="checkbox-item">{props.data.text}</p>
        </div>
    )

}


export default ToDoList;