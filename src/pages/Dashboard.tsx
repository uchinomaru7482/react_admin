import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <main>
        <h2>Dashboard</h2>
        <p>
          hoge huga piyo
        </p>
      </main>
      <nav>
        <Link to="/user/list">user list</Link>
      </nav>
    </>
  );
}

export default Dashboard;
