import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard';
import MovieAdd from './components/MovieAdd';
import MovieFiler from './components/MovieFilter ';
import 'bootstrap/dist/css/bootstrap.min.css';


import { useState, useEffect } from "react";


function App() {

  const MovieList = [
    { id: 0, title: "helma", description: "coding",posteURl:"gdhdgd",rating:"hdh" },
    { id: 1, title: "game of throw", description: "hello game of throne",posteURl:"gdhdgd",rating:"hdh" },
    { id: 2, title: "asma", description: "hello",posteURl:"gdhdgd",rating:"hdh" },
];

  const[movies,setMovie] = useState(MovieList)
  const[searchItem , setsearchItem] = useState("")
 const  addMovie = (movie) =>{
   setMovie([...movies, movie ])

  }
 

   const handlesearchItem = (e)=>{
       let value = e.target.value
       setsearchItem(value)

   };
 
  

  return (
    <div className="App">
       <MovieFiler  filter={handlesearchItem}/>
       <MovieAdd add={addMovie}/>
       <div>
       {movies.filter((elt) =>{ 
        return  elt.title.toLowerCase().includes(searchItem .toLowerCase());

       
       }).map((elt) => (<MovieCard key={elt.id}  movie={elt} />))}
       </div>
      
      
      
     
        </div>
      
  

     
    
  );
  }

export default App;
