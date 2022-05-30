import { Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<CreateTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </div>
  );
}

export default App;
