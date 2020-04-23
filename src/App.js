import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import List from "./components/List";
import Nav from "./components/Nav";
import Comments from "./components/Comments";


function App() {

  const mockData = [
    {
      name: "George Costanza",
      note: "KRAMER!!"
    },
    {
      name: "Carrie Underwood",
      note: "I sing things!"
    },
    {
      name: "Freddie Mercury",
      note: "Welp..."
    },
    {
      name: "Drew Carrie",
      note: "Likes funny socks!"
    },

  ];

  useEffect(() => {
    retriveFakeData();
  }, []);

  const [comments, setComments] = useState([]);

  const retriveFakeData = () => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then(commentsData => {
      setComments(commentsData.data);
    })
  }

  return (
    <div className="App">
      <Nav />
      <List mockData={mockData} />
      <div className="row">
        <Comments comments={comments} />
      </div>
    </div>
  );
}

export default App;
