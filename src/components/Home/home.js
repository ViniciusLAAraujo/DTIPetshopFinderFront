import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../Logo/logo';
import DTILogo from '../DTILogo/dtilogo';
import './home.css';

function Home() {
  return (
    <Container className="home-content">
      <Row>
        <Col md={4}>
          <Logo className="home-img" />
        </Col>
        <Col md={4}>
          <h1>Petshop - DTI Digital</h1>
        </Col>
        <Col md={4}>
          <DTILogo className="home-img" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Descrição do Problema:</h2>
          <p>
            Você pode inserir a data do banho, a quantidade de cães pequenos e a quantidade de cães grandes e clicar em "Encontrar" para descobrir qual petshop oferece o melhor preço com base na proximidade e custo.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Como Usar o Sistema:</h2>
          <p>
            Você pode inserir a data do banho, a quantidade de cães pequenos e a quantidade de cães grandes e clicar em "Encontrar" para descobrir qual petshop oferece o melhor preço com base na proximidade e custo.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
