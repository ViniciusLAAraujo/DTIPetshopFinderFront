import './App.css';
import api from './api/axiosConfig'
import {useState, useEffect} from 'react';

function App() {

  const [petshops, setPetshops] = useState ();

  const getPetshops = async () => {

    try{
      const response = await api.get("/petshop");

      console.log(response.data);
    
      setPetshops(response.data);}
    catch (err){
      console.log(err);}
  };

  useEffect(()=> {
    getPetshops();
  },[])

  return (
    <div className="App">
    </div>
  );
}
export default App;
