import React, { useState, useEffect } from 'react'
import './App.css'

// bootstrap5
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

// const [response, setResponse] = useState(null)
// const {url, method} = 


function App() {
  
  useEffect(() => {
    async function data() {
      const response = await fetch('https://swapi.py4e.com/api/films')
      const movieList = await response.json()
      const movieValues = Object.values(movieList.results)
      console.log(movieValues)
      // const filteredList = movieValues.map(item => item[title]);
      // console.log(filteredList);

      function selectFewerProps(oldArr) {
        const { release_date, title } = oldArr
        return { release_date, title }
      }

      // const shortlist = movieValues.map()
      const shortlist = movieValues.map(selectFewerProps)
      const wholeList = [...shortlist]  
      console.log(wholeList)
      

      const text = shortlist.toString()
      console.log(text)

      // const movieArr = Object.entries(movieList);

      // console.log(movieArr[0][1].release_date, movieArr[0][1].title);
    }
    data()
  }, [])

  return (
    <div className='row bodyDiv'>
      <Card className='bg-dark'>
        <Card.Img
          style={{ height: '25rem', width: '100%' }}
          src='https://unsplash.com/photos/r8eL7SY3lHA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTF8fGR1bmVzfGVufDB8fHx8MTY0NjkwODIxMg&force=true'
        />
        <Card.ImgOverlay>
          <Row className='justify-content-center'>
            <div className='m-3'>
              <h1 className='pt-5 fw-bolder display-1 text-center text-warning'>
                STAR <br /> WARS
                <br />
                <h5>MovieInfoApi</h5>
              </h1>
            </div>
          </Row>
        </Card.ImgOverlay>
      </Card>
      <div className='row' id='list'>
        <div className='col'></div>
        <div className='col-2 pt-5 mb-0'>
          <label className='pb-3 fs-5 text-warning'>
            Mind lead to thoughts.. Thoughts lead to questions..
          </label>
          <input
            placeholder='What is yours?'
            className='text-center btn-danger flex p-2'
            style={
              .
            }
          />
        </div>
        <div className='col'></div>
      </div>
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
    </div>
  )
}
export default App;
