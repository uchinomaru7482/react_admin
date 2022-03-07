import { Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/user/List";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user/list" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
