import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap';
import PetshopService from '../../services/petshopService';
import PositiveNumberInput from '../../utils/positiveNumberInput';
import "./bestPetshopPage.css";

function BestPetShopPage() {
  // Hook de estado que verifica mudanças na variavel serachDTO(que representa os valores do formulario) 
  const [searchDTO, setSearchDTO] = useState({
    date: '',
    numSmallDog: 0,
    numBigDog: 0,
  });
  const [bestPetShop, setBestPetShop] = useState(null); //Hook que acompanha a variavel bestPetShop e suas mudanças

  //Função executada apos o envio do formulara, chama o servico que acessa a API
  const handleSearch = async (e) => {
    e.preventDefault(); //Impede que ao enviar a pagina seja recarregada
      await PetshopService.getBestPetShop(searchDTO)
      .then((response) =>{
        setBestPetShop(response)
      }).catch ((err) => {
        console.error('Erro ao recuperar o melhor petshop:', err);
      }) 
  };

  //Função que recebe um numero o formata em duas strings valores antes da casa decimal e apos a casa e as retorna
  const splitDecimal = ((number) => {
    
   let strNumber = number.toFixed(2).toString()
   let numInt = strNumber.split(".")[0]
   let numDec = strNumber.split(".")[1]
   return {numInt,numDec}
  })


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
        <>
        <h3 className="text-center">O melhor petshop é:</h3>
        <br></br>
        
        <Card id="bestpetshopcard">
          <Card.Header>
            <h5 className="text-center bestpetshopname">{bestPetShop.name} </h5>
            <h6 className="text-center bestpetshopkm">{bestPetShop.kmDistance.toFixed(2)} km </h6>
          </Card.Header>
          <Card.Body>
            <Card.Title className="text-center"><span className="totalamountbig">R${splitDecimal(bestPetShop.totalAmount).numInt}</span><span className="totalamountsmall">.{splitDecimal(bestPetShop.totalAmount).numDec}</span></Card.Title>
            <Card.Text className="text-center cardtextprices">Total pequenos: R$ {bestPetShop.smallDogAmount.toFixed(2)}</Card.Text>
            <Card.Text className="text-center cardtextprices">Total grandes: R$ {bestPetShop.bigDogAmount.toFixed(2)}</Card.Text>
          </Card.Body>
        </Card>
        </>
        )}   
    </Row>
    <br></br>
  </Container>
  );
}

export default BestPetShopPage;
