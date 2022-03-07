import { Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/user/List"

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user/list" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
