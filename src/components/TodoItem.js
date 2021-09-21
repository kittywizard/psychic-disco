function TodoList(props) {
    return (
        <div className="app"> 
        {/* 
          always use className instead of class 
          curly braces are javascript 
        */
        }
          <input type="checkbox" name="item"/>
          <p className="checkbox-item">{props.data.text}</p>
  
        </div>
    )

}

export default TodoList;