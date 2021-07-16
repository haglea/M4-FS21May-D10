import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import MySideBar from "./components/MySideBar";
import MyMediaControl from "./components/MyMediaControl";

function App() {
  return (
    <Router>
      <Container fluid>
      <MySideBar />
          
      <MyMediaControl />
      </Container>
    </Router>
  );
}

export default App;
