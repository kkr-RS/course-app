import React, { useEffect } from "react";
import { Container,Button } from "reactstrap";

const Home = () => {
  useEffect(()=>{
    document.title = "Home || Learn Code With Kiran"
  },[]);
  return (
    <div className="jumbotron bg-primary text-center">
      <h1>Learn Code</h1>
      <p>
        This is developed by Learncode with kiran for learning purpose it's
        backend is on spring boot and frontend on react js
      </p>
      <Container>
        <Button color="success">Start Using</Button>
      </Container>
    </div>
  );
};

export default Home;
