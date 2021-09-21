
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import toDoData from "./toDoData";

function App() {
  const toDoComponents = toDoData.map(data => <TodoItem key={data.id} data={data}/>)

  return (
    <div className="container">
      <Header />
      <div className="list-container">
        {toDoComponents}
      </div>
    </div>

  );
}

export default App;

