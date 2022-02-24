import React from "react";
import { Card } from 'react-bootstrap';



function MovieCard({movie}) {
  

return (
    
<div>

  <Card border="primary" style={{ width: '250px', display:"inline-block",marginLeft:"400px",marginTop:"50px"}}>
    <Card.Header>movie</Card.Header>
    <Card.Body>
      <Card.Title>{movie.title} </Card.Title>
      <Card.Text>
       {movie.description}
       </Card.Text>
       <br/>
       <Card.Text>
       {movie.posteURl}
       </Card.Text>
      
       <Card.Text>
       {movie.rating}
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

 </div>
  

)}
export default MovieCard