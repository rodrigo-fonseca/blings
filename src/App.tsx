import Search from "./pages/search/Search";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Search />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
