import React, { useEffect } from "react";
import { Container, Button } from "reactstrap";

const Contact = () => {
  useEffect(() => {
    document.title = "Home || Learn Code With Kiran";
  }, []);
  return (
    <div className="jumbotron bg-warning text-center">
      <h1>Contact Us</h1>
      <p>Email ID:Kiranrout1999@gmail.com</p>
      <p>Phone: 7013030538</p>
    </div>
  );
};

export default Contact;
