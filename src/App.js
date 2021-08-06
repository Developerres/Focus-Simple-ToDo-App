import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
