import React, { useState } from "react";

function UserItem({ user }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    // onclick 이벤트 핸들러는 함수가 전달되야해서 익명함수로 만들어줌
    <li onClick={() => setShowInfo(!showInfo)}>
      {user.name}
      {showInfo ? (
        <div>
          <div>email : {user.email}</div>
          <div>job : {user.job}</div>
        </div>
      ) : null}
    </li>
  );
}

function UserList({ users }) {
  return (
    <ul>
      {users.map((item) => {
        return <UserItem key={item.id} user={item} />;
      })}
    </ul>
  );
}

export default function Userlist() {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", job: "Engineer" },
    { id: 2, name: "Bob", email: "bob@example.com", job: "Designer" },
    { id: 3, name: "Charlie", email: "charlie@example.com", job: "Manager" },
  ];

  return (
    <div>
      <h1>user list</h1>
      <UserList users={users} />
    </div>
  );
}
