import React, { useState, useEffect } from "react";
import Slider from "./Components/Slider";
import Header from "./Components/Header";
import ActualPosts from "./Components/ActualPosts";
import './App.scss';

export default function App() {
  const [userId, setUserId] = useState()
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data => {
        data.forEach(element => element.photo = `https://i.pravatar.cc/400?img=${element.id}`)
        setUsers(data)
        setUserId(10)
      })
  }, []);

  function handlerChange(id) {
    setUserId(id);
  };

  return (
    <>
      <Header />
      <main>
        <Slider users={users} userId={userId} handlerChange={handlerChange} />
        <ActualPosts userId={userId} users={users} />
      </main>
    </>
  );
}