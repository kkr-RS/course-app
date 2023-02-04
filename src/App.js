import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import Allcourses from "./components/Allcourses";
import AddCourse from "./components/AddCourse";
import UpdateCourse from "./components/UpdateCourse";
import About from "./components/About";
import Contact from "./components/ContactUs";
import Header from "./components/Header";
import Menus from "./components/Menus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const btnHandle = () => {
    toast.success("done", {
      position: "top-center",
    });
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />

          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-course" element={<AddCourse />} exact />
                <Route path="/update-course" element={<UpdateCourse />} exact />
                <Route path="/view-courses" element={<Allcourses />} exact />
                <Route path="/about" element={<About />} exact />
                <Route path="/contact" element={<Contact />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
