import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Strings } from "./util/Strings";

const App = () => {
  return (
    <div>
      <header className='sticky top-0 z-50'>
        <nav className="navbar navbar-dark bg-primary">
          <Container fluid>
            <a href="/" className="navbar-brand">{Strings.appName}</a>
          </Container>
        </nav>
      </header>
      <Container>
        <Row className="mt-2">
          <Col xs={12} md={4}>
            <Form.Group className="mb-3">
              <Form.Label>{Strings.contractAddress}</Form.Label>
              <Form.Control type="text" placeholder={Strings.contractHint} />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{Strings.eoaAddress}</Form.Label>
              <Form.Control type="text" placeholder={Strings.eoaHint} />
            </Form.Group>
          </Col>
          <Col xs={12} md={4} className='d-flex justify-content-center align-items-center'>
            <Button className="bg-secondary border-secondary" type="submit">{Strings.submit}</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
