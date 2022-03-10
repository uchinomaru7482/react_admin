import React from "react"
import { Link } from "react-router-dom";

const Dashboard: React.VFC = () => {
  let hoge = 123;
  return (
    <>
      <main>
        <h2>Dashboard</h2>
        <p>
          hoge huga piyo{hoge}
        </p>
      </main>
      <nav>
        <Link to="/user/list">user list</Link>
      </nav>
    </>
  );
}

export default Dashboard;
