import { useState } from 'react';
import api from './axiosConfig';

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
      const response = await api.post('/petshop/best', searchDTO);
      setBestPetShop(response.data);
    } catch (err) {
      console.error('Erro ao recuperar o melhor petshop:', err);
    }
  };

  return (
    <div>
      <h1>Encontre o melhor Petshop</h1>
      <form onSubmit={handleSearch}>
        <label>
          Data do banho:
          <input
            type="date"
            value={searchDTO.date}
            onChange={(e) =>
              setSearchDTO({
                ...searchDTO,
                date: e.target.value,
              })
            }
          />
        </label>
        <label>
        Numero de cães pequenos:
          <input
            type="number"
            value={searchDTO.numSmallDog}
            onChange={(e) =>
              setSearchDTO({
                ...searchDTO,
                numSmallDog: parseInt(e.target.value),
              })
            }
          />
        </label>
        <label>
        Numero de cães grandes:
          <input
            type="number"
            value={searchDTO.numBigDog}
            onChange={(e) =>
              setSearchDTO({
                ...searchDTO,
                numBigDog: parseInt(e.target.value),
              })
            }
          />
        </label>
        <button type="submit">Encontrar</button>
      </form>
      {bestPetShop && (
        <div>
          <h2>O melhor petshop para esses termos é:</h2>
          <p>Nome: {bestPetShop.name}</p>
          <p>Distancia em Km: {bestPetShop.kmDistance}</p>
          <p>Total a pagar: R$ {bestPetShop.totalAmount}</p>
          <p>Total dos pequenos: {bestPetShop.smallDogAmount}</p>
          <p>Total dos grandes: {bestPetShop.bigDogAmount}</p>
        </div>
      )}
    </div>
  );
}

export default BestPetShopPage;
