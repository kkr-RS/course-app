import React, { useEffect } from "react";
import { Container, Button } from "reactstrap";

const About = () => {
  useEffect(() => {
    document.title = "Home || Learn Code With Kiran";
  }, []);
  return (
    <div className="jumbotron bg-success text-center">
      <h1>About</h1>
      <p>
        This is developed by Learncode with kiran for learning purpose it's
        backend is on spring boot and frontend on react js
      </p>
    </div>
  );
};

export default About;
