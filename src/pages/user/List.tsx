import React from "react"

const UserList: React.VFC = () => {
  return (
    <>
      <div className="frame">
        <h2 className="page-title">UserList</h2>
        <div className="py-4 overflow-x-auto">
          <div className="wrap-table">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p>1</p></td>
                  <td><p>Kenta</p></td>
                  <td><p>23</p></td>
                  <td><p>User</p></td>
                </tr>
              </tbody>
            </table>
            <div className="pagination">
              <div>
                <button className="mr-2">next</button>
                <button>prev</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
