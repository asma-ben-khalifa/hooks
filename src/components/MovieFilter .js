import React, { useState } from 'react';
import { 
     Button } from "react-bootstrap";
import MovieAdd from './MovieAdd';
     import './movie.css'

function MovieFiler({filter}) {
   
  

 
    
    return (
        
        <div>
        
        <input type="text" placeholder="search..."  onChange={filter} className='inpt'/>
           
            
    

  
    

    </div>
        
    
    
     ) }

     export default MovieFiler