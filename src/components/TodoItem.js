function TodoList() {
    return (
        <div className="app"> 
        {/* 
          always use className instead of class 
          curly braces are javascript 
        */}
          <input type="checkbox" name="item"/>
          <p className="checkbox-item">Placeholder</p>
  
        </div>
    )

}

export default TodoList;