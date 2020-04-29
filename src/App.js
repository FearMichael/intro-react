import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import List from "./components/List";
import Nav from "./components/Nav";
import Comments from "./components/Comments";

// Class based components
// class App extends React.Component() {
//   constructor() { }

//   state = {
//     mockData: {},
//     name: "George",
//     user: "Bobby Hoffman"
//   }

//   render() {
//     return (
//       <div>
//         Something
//         <p>{this.state.name}</p>
//       </div>
//     )
//   }
// }


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
      setComments(commentsData.data.slice(0, 10));
    })
  }

  const userConfig = {
    admin: false,
    bobby: true,
    showEmail: false,
    comments
  }
  const adminConfig = {
    admin: false,
    bobby: true,
    showEmail: true,
    comments
  }

  return (
    // <div className="App">
    <>
      <Nav />
      <List mockData={mockData} config={true} />
      <div className="row">
        <Comments config={userConfig} />
        <hr></hr>
        <Comments config={adminConfig} />
      </div>
    </>
    // </div>
  );
}

export default App;
