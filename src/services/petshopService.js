import api from '../api/axiosConfig';

const PetshopService = {
  //Função que recebe os dados de pesquisa enviado pelo formulario e chama de maneira assincrona o endpoint da API para receber 
  // um JSON do melhor petshop (DTO)
  getBestPetShop: async (searchDTO) => {
    try {
      const response = await api.post('/petshop/best', searchDTO);
      return response.data;
    } catch (err) {
      console.error('Erro ao recuperar o melhor petshop:', err);
      throw err;
    }
  },
  //Função assincrona que chama o endpoint para receber todos os petshops presentes no banco
  getAllPetshops: async () => {
    try {
      const response = await api.get('/petshop');
      console.log(response.data)
      return response.data;
    } catch (err) {
      console.error('Erro ao recuperar todos a lista de petshops', err);
      throw err;
    }
  },
};

export default PetshopService;
