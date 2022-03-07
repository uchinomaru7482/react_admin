import { Link } from "react-router-dom";

function UserList() {
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
