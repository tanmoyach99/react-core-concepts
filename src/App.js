import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const friendNames = [ {name:"anik", age: "25"}, {name:"sushu",age:"28"}]
  return (
   
   
    <div className="App">
      <header className="App-header">
      <Users></Users>
      <ul>
      {friendNames.map(fr=><li>{fr.name}</li>)}
    </ul>
    {friendNames.map(friend => <Friends friend = {friend.name}></Friends>)}
    <Counter></Counter>
        <Players name = "lautaro" skill= "poacher"></Players>
        <Players name = "messi" skill = "dribbler"></Players>
        <Players name = "ronaldo" skill = "long-shooter"></Players>
        
       
       
      </header>
    </div>
  );
}
function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  }
  )
  return(
    <div>
      {console.log()}
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li> )
        }

      </ul>
    </div>
  )
}
function Counter(){
  const [count,setCount]=useState(0);
  const handleIncrease = () =>{
    const newCount = count+1;
    setCount(newCount);

  }
  return(
    <div>
      <h2>{count}</h2>
    <button onClick = {handleIncrease}> increase </button>
    </div>
  )
}
function Friends(props){
  const friendStyle = {
    border: "3px solid red",
    height: "200px",
    width : "200px",
    margin: "10px",
    boxShadow: "5px 5px 10px lightgray"
  }
  return(
    <div style = {friendStyle}>
      <h3>{props.friend}</h3>
     <footer>
     <button>buy now</button>
     </footer>
    </div>
  )
  
}
function Players(props){
  const playersStyle = {
    border: "2px solid green",
     margin: "10px",
      width:"350px", 
      borderRadius: "20px",
      color: "yellow"
   }
  return(
    <div style = {playersStyle}>
      <h1>name: {props.name}</h1>
      <h3>skill: {props.skill}</h3>
    </div>
  )
}

export default App;
