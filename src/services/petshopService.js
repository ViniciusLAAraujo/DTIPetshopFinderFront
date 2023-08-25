import api from '../api/axiosConfig';

const petshopService = {
  getBestPetShop: async (searchDTO) => {
    try {
      const response = await api.post('/petshop/best', searchDTO);
      return response.data;
    } catch (err) {
      console.error('Erro ao recuperar o melhor petshop:', err);
      throw err;
    }
  },
};

export default petshopService;
