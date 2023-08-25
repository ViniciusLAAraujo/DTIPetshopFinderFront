import React, { useState, useEffect } from 'react';
import PetshopService from '../services/petshopService';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

function AllPetshopsPage() {
  const [petshops, setPetshops] = useState([]);

  const fetchAllPetshops = async () => {
    try {
      const petshopData = await PetshopService.getAllPetshops();
      setPetshops(petshopData);
    } catch (err) {
      console.error('Error fetching all petshops:', err);
    }
  };

  useEffect(() => {
    fetchAllPetshops();
  }, []);

  return (
    <div>
    <br></br>
    <h1 className="text-center">Lista de todos os petshops</h1>
      <Container>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {petshops.map((petshop) => (
            <div key={petshop.id} className="col mb-4">
              <Card className="h-100">
                <Card.Header>
                  <h3 className="text-center">{petshop.name}</h3>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                      <p className="text-center">Distância em Km: {petshop.kmDistance ? petshop.kmDistance.toFixed(2) : 'N/A'} km</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h4 className="text-center">Preços Normais</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <p className="text-center">Cão Pequeno :</p>
                    </Col>
                    <Col md={6}>
                      <p className="text-center">Cão Grande :</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <p className="text-center">R$ {petshop.weekdayPriceSmallDog ? petshop.weekdayPriceSmallDog.toFixed(2) : 'N/A'}</p>
                    </Col>
                    <Col md={6}>
                      <p className="text-center">R$ {petshop.weekdayPriceBigDog ? petshop.weekdayPriceBigDog.toFixed(2) : 'N/A'}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h4 className="text-center">Preços de Fim de Semana</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <p className="text-center">Cão Pequeno :</p>
                    </Col>
                    <Col md={6}>
                      <p className="text-center">Cão Grande :</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <p className="text-center">R$ {petshop.weekendPriceSmallDog ? petshop.weekendPriceSmallDog.toFixed(2) : 'N/A'}</p>
                    </Col>
                    <Col md={6}>
                      <p className="text-center">R$ {petshop.weekendPriceBigDog ? petshop.weekendPriceBigDog.toFixed(2) : 'N/A'}</p>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary" className="mx-auto d-block">
                    Atualizar Petshop
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPetshopsPage;
