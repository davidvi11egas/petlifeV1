import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
  <div>
    <Hero backgroundImage="https://image.freepik.com/vector-gratis/simbolo-de-perro-contorno-minimalista-animal-simbolo_20065-63.jpg">
      <h1>Pet Lifestyle Enhancement</h1>
      <h2>Connecting lifestyle solutions</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To PetLife</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
          PetLife crates a space where pet lifestyle solutions are connected and shareable. We strive to use consumer technology, communication, and efficiency to make life better and safer for pet parents and their babies.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
