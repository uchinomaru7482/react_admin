import React from "react"
import { Link } from "react-router-dom";

const UserList: React.VFC = () => {
  return (
    <>
      <main>
        <h2>User List</h2>
        <p>
          huga piyo hoge
        </p>
      </main>
      <nav>
        <Link to="/">Dashboard</Link>
      </nav>
    </>
  );
}

export default UserList;
