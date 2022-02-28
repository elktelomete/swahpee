import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Alert, Breadcrumb, Card, Container } from "react-bootstrap";

function App() {
  return (
    <div className="container">
      <div className="bodyDiv">
        <div>
          <Card className="bg-dark text-white">
            <Card.Img
              style={{ height: "40rem" }}
              src="https://source.unsplash.com/random/?dunes"
            />
            <Card.Body />
            <Card.ImgOverlay>
              <Card.Title>examplu</Card.Title>
              <Card.Text>cacamamams</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <header className="cabeza">
          <h6 style={{ color: "white" }}>didn du nuttin</h6>
          <div>
            <br />
            <br />
          </div>
          <div className="container">
            <Button variant="primary">caca</Button>
            <br />
            <br />
            <Button>test</Button>
          </div>
          <Breadcrumb>
            <Breadcrumb.Item>caca</Breadcrumb.Item>
            <Breadcrumb.Item>maca</Breadcrumb.Item>
            <Breadcrumb.Item>waca</Breadcrumb.Item>
          </Breadcrumb>
        </header>
      </div>
    </div>
  );
}

export default App;
