import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap';
import PetshopService from '../../services/petshopService';
import PositiveNumberInput from '../../utils/positiveNumberInput';
import "./bestPetshopPage.css"

function BestPetShopPage() {
  const [searchDTO, setSearchDTO] = useState({
    date: '',
    numSmallDog: 0,
    numBigDog: 0,
  });
  const [bestPetShop, setBestPetShop] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await PetshopService.getBestPetShop(searchDTO);
      setBestPetShop(response);
    } catch (err) {
      console.error('Erro ao recuperar o melhor petshop:', err);
    }
  };


  return (
    <Container>
    <br></br>
    <h1 className="text-center">Encontre o melhor Petshop</h1>
    <Form onSubmit={handleSearch}>
      <Row>
        
        <Col md={6}>
            <PositiveNumberInput
              label="Número de cães pequenos:"
              value={searchDTO.numSmallDog}
              onChange={(value) =>
                setSearchDTO({ ...searchDTO, numSmallDog: value })
              }
            />
        </Col>

        <Col md={6}>
          <PositiveNumberInput
              label="Número de cães grandes:"
              value={searchDTO.numBigDog}
              onChange={(value) =>
                setSearchDTO({ ...searchDTO, numBigDog: value })
              }
            />
        </Col>
      </Row>
      <Form.Group>
        <Form.Label>Data do banho:</Form.Label>
        <Form.Control
          type="date"
          value={searchDTO.date}
          onChange={(e) =>
            setSearchDTO({
              ...searchDTO,
              date: e.target.value,
            })
          }
        />
      </Form.Group>
      <br></br>
      <Button type="submit" id="findbutton">Encontrar</Button>
    </Form>
    <br></br>
    <Row className="justify-content-center">
      {bestPetShop && (
        <Card id="bestpetshopcard">
          <Card.Header>
            <h5 className="text-center">{bestPetShop.name} </h5>
            <h6 className="text-center">{bestPetShop.kmDistance.toFixed(2)} km </h6>
          </Card.Header>
          <Card.Body>
            <Card.Title className="text-center">R$ {bestPetShop.totalAmount.toFixed(2)}</Card.Title>
            <Card.Text className="text-center">Preço pequenos: R$ {bestPetShop.smallDogAmount.toFixed(2)}</Card.Text>
            <Card.Text className="text-center">Preço grandes: R$ {bestPetShop.bigDogAmount.toFixed(2)}</Card.Text>
          </Card.Body>
        </Card>
        )}   
    </Row>
    <br></br>
  </Container>
  );
}

export default BestPetShopPage;
