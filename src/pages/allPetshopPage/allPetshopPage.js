import React, { useState, useEffect } from 'react';
import PetshopService from '../../services/petshopService';
import { Card, Button, Container } from 'react-bootstrap';
import './allPetshopPage.css';

//Função que acessa os servições para realizar uma chamada a aplicação backend que retorne um JSON com todos os petshops do banco
function AllPetshopsPage() {
  const [petshops, setPetshops] = useState([]); //Hook que atualiza o valor da variavel petshop a partir da função setPetshop

  const fetchAllPetshops = async () => {
    try {
      const petshopData = await PetshopService.getAllPetshops();
      setPetshops(petshopData);
    } catch (err) {
      console.error('Erro ao buscar todos os petshops', err);
    }
  };

  //Hook useEffect executa a função apos o render dos componentes e em qualquer atualização subsequente, porem com o argumento [] 
  // indica que o efeito só deve ocorrer na inicialização
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
              <Card className="cardlistitem">
                <Card.Header>
                  <h3 className="text-center">{petshop.name}</h3>
                </Card.Header>
                <Card.Body>
                  <p className="text-center">Distância em Km: {petshop.kmDistance ? petshop.kmDistance.toFixed(2) : 'N/A'} km</p>
                  <h4 className="text-center">Preços Normais</h4>
                  <div className="text-center">
                    <p>Cão Pequeno: R$ {petshop.weekdayPriceSmallDog ? petshop.weekdayPriceSmallDog.toFixed(2) : 'N/A'}</p>
                    <p>Cão Grande: R$ {petshop.weekdayPriceBigDog ? petshop.weekdayPriceBigDog.toFixed(2) : 'N/A'}</p>
                  </div>
                  <h4 className="text-center">Preços de Fim de Semana</h4>
                  <div className="text-center">
                    <p>Cão Pequeno: R$ {petshop.weekendPriceSmallDog ? petshop.weekendPriceSmallDog.toFixed(2) : 'N/A'}</p>
                    <p>Cão Grande: R$ {petshop.weekendPriceBigDog ? petshop.weekendPriceBigDog.toFixed(2) : 'N/A'}</p>
                  </div>
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
