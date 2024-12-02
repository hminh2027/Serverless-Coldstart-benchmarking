"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  const createUser = async () => {
    const newUser = await axios.post("http://localhost:3000/api/user", {
      name: "John Doe",
    });
    setUsers((prev) => [...prev, newUser.data]);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/api/user").then((res) => {
      setUsers(res.data.data);
    });
    axios.get("http://localhost:3000/api/user/1");
  }, []);

  return (
    <div>
      User list:
      {users.map((user) => (
        <div key={user.name}>{user.name}</div>
      ))}
      <button onClick={createUser}>Create User</button>
    </div>
  );
}
