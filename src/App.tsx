import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/user/List";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const toggleIsOpenSidebar = () => setIsOpenSidebar(!isOpenSidebar);

  return (
    <div className="App flex h-screen bg-gray-200">
      <div onClick={toggleIsOpenSidebar} className={(isOpenSidebar ? "block" : "hidden") + " fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"}></div>
      <Sidebar isOpenSidebar={isOpenSidebar} />
      <div className="flex-1 flex-col overflow-hidden">
        <Header toggleIsOpenSidebar={toggleIsOpenSidebar} />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user/list" element={<UserList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
