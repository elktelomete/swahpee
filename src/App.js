import React, { useState, useEffect } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  Modal,
  FloatingLabel,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  InputGroup,
  Form,
  Row,
} from 'react-bootstrap'


// const data = async() => {
//   const response = await fetch('https://swapi.py4e.com/api/films');
//   const firstMovie = await response.json();
//     console.log(firstMovie.results);
//   }
  
  function App() {
  
// useEffect(() => {  
//     async function data() {
//       const response = await fetch('https://swapi.py4e.com/api/films');
//       const movieList = await response.json();
//       const releaseYearList = movieList.map((release_date) => {
//        if (results.) 
//       }); 
//       console.table();
//     }data()
//   }, []);
  
    
  useEffect(() => {  
    async function data() {
      const response = await fetch('https://swapi.py4e.com/api/films');
      const movieList = await response.json();
      const movieValues = Object.values(movieList.results);
      console.log(movieValues);
      // const filteredList = movieValues.map(item => item[title]); 
      // console.log(filteredList);
      
      function selectFewerProps(movie){
        const {release_date, title } = movie;
        return {release_date, title };
      }

      const shortlist = movieValues.map(selectFewerProps);
      console.log(shortlist);
      
      const text = shortlist.toString();
      console.log(text);
      
      
      
      // const movieArr = Object.entries(movieList);
           
      // console.log(movieArr[0][1].release_date, movieArr[0][1].title);        

      };data()
    }, []);

    
  return (
    <div className='bodyDiv'>
      <Container>
        <Card className='bg-dark text-light'>
          <Card.Img
            // fluid={true}
            style={{ height: '25rem' }}
            src='https://source.unsplash.com/random/1920x1080/?sanddunes'
          />
          <Card.ImgOverlay>
            <Row sm={3} className='justify-content-center'>
              <div className=''>
                <h1 id className='fw-bolder fs-1 text-end pt-5 '>
                  STAR WARS
                  <br />
                  <h5>MovieInfoApi</h5>
                </h1>
              </div>
            </Row>
          </Card.ImgOverlay>
        </Card>
        <div className='p-5'>
          <Container>
            <Row className='justify-content-md-center'>
              <Col>
                <FloatingLabel
                  controlId='floatingInput'
                  label='Störvårss'
                  className='mb-3'>
                  {/* <Form.Control size='lg' type='search' value={searchQuery} /> */}
                </FloatingLabel>
              </Col>
            </Row>
          </Container>
        </div>
        <div></div>
      </Container>
    </div>
  )
}
export default App
