import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Logo from '../../components/logo/logo';
import DTILogo from '../../components/dtilogo/dtilogo';
import './home.css';

function Home() {
  return (
    <Container className="home-content">
      <br />
      <Row>
        <Col md={4} className="img-col">
          <Logo className="home-img" />
        </Col>
        <Col md={4}>
          <Row>
            <h1 className="text-center hometitle">Petshop</h1>
          </Row>
          <Row>
            <h1 className="text-center hometitle">DTI Digital</h1>
          </Row>
        </Col>
        <Col md={4} className="img-col">
          <DTILogo className="home-img" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Descrição do Problema:</Card.Title>
              <Card.Text>
              O desafio consiste em encontrar, entre um conjunto de petshops, aquele que melhor atende aos requisitos específicos. O objetivo principal é minimizar os custos totais do banho, considerando que cada petshop tem preços diferentes para cães pequenos e grandes, que variam de acordo com os dias da semana. Além disso, em caso de empate nos preços, a proximidade do petshop em relação ao canil deve ser considerada para tomar a decisão final.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Como Usar o Sistema:</Card.Title>
              <Card.Text>
                Você pode inserir a data do banho, a quantidade de cães pequenos e a quantidade de cães grandes e clicar em "Encontrar" para descobrir qual petshop oferece o melhor preço com base na proximidade e custo.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
