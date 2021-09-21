
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";

function App() {

  return (
    <div className="container">
      <Header />
      <div class="list-container">
        <TodoItem />
        <TodoItem />
        <TodoItem />

      </div>
    </div>

  );
}

export default App;

// From scratch, initialize the React app
// Render an <App /> component
// Create the <App /> component from scratch
// Have the <App /> component render 3 or 4 checkboxes with paragraphs or spans next to it
// like you're making a todo list with some hard-coded items on it
