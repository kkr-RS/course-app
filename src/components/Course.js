import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Link, Route,Routes } from "react-router-dom";
import { toast } from "react-toastify";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
  ListGroup,
} from "reactstrap";
import base_url from "../API/bootapi";
import AddCourse from "./AddCourse";

const Course = ({ course, update }) => {
  const delteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("course deleted");
        update(id);
      },
      (error) => {
        toast.error("course not deleted !! Server Problem");
      }
    );
  };

  const updateCourse = ({ course, update }) => {
    axios.update(`${base_url}/courses`).then(
      (response) => {
        toast.success("course updated");
      },
      (error) => {
        toast.error("course not updated !! Server Problem");
      }
    );
  };

  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-weight-bold">{course.id} : {course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button
            color="danger"
            onClick={() => {
              delteCourse(course.id);
            }}
          >
            Delete
          </Button>{" "}
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
