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

const DataSmuggler = () => {
  const [Movie, setMovie] = useState('null')

  useEffect(() => {
    // fetch('https://swapi.py4e.com/api/films/1/')
      .then((response) => response.json())
      .then((data) => setMovie(data.release_date))
  }, [])
}

function App() {
  return (
    <div className='bodyDiv'>
      <Container>
        <Card className='bg-dark text-light'>
          <Card.Img
            fluid={true}
            style={{ height: '25rem' }}
            src='https://source.unsplash.com/random/1920x1080/?desert,dunes,'
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
