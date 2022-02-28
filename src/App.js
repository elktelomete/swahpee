import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
} from 'react-bootstrap';

function App() {
  return (
    <div className='bodyDiv'>
      <Container>
        <Card className='bg-dark text-light'>
          <Card.Img
            fluid={true}
            style={{ height: '25rem' }}
            src='https://source.unsplash.com/random/?desert,dunes'
          />
          <Card.ImgOverlay>
            <Row sm={3} className='justify-content-center'>
              <div>
                <h1
                  className={
                    'fw-bolder fs-1 text-end pt-5 '
                  }>
                  STAR WARS
                  <br />
                  <h5>MovieInfoApi</h5>{' '}
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
                  className={'mb-3'}>
                  <Form.Control size='lg' type='text' controlId='box' />
                </FloatingLabel>
              </Col>
            </Row>
          </Container>
        </div>
        <div></div>
      </Container>
    </div>
  );
}
export default App;
