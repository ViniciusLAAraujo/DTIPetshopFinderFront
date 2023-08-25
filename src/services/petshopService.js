import api from '../api/axiosConfig';

const PetshopService = {
  getBestPetShop: async (searchDTO) => {
    try {
      const response = await api.post('/petshop/best', searchDTO);
      return response.data;
    } catch (err) {
      console.error('Erro ao recuperar o melhor petshop:', err);
      throw err;
    }
  },
  getAllPetshops: async () => {
    try {
      const response = await api.get('/petshop');
      console.log(response.data)
      return response.data;
    } catch (err) {
      console.error('Error fetching all petshops:', err);
      throw err;
    }
  },
};

export default PetshopService;
