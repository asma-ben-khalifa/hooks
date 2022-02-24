import React from 'react';
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import './movie.css';


export const MovieAdd = ({add}) => {

  const[movies,setMovie] = useState([])
 
  

const handleChange = (change) =>{
  setMovie({
    ...movies,
    id: Math.floor(Math.random() * 10000) + 1,
    title: change.target.value,
    description:change.target.value,
    posteURL:change.target.value,
    rating:change.target.value,
    
  });
};

const onSubmit = (change) =>{
  change.preventDefault()
  add(movies)
}


return (

  <Form  onSubmit={onSubmit} className='form'>
  <Form.Group className="mb-3">
    <Form.Label>Title</Form.Label>
    <Form.Control placeholder="title" onChange={handleChange}  />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>description</Form.Label>
    <Form.Control placeholder="description" onChange={handleChange} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>posteurl</Form.Label>
    <Form.Control placeholder="posteurl" onChange={handleChange} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>rating</Form.Label>
    <Form.Control placeholder="rating" onChange={handleChange} />
  </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
    
    </Form>


  )
}

 export default MovieAdd