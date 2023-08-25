import './App.css';
import api from './api/axiosConfig'
import {useState, useEffect} from 'react';
import BestPetShopPage from './components/bestPetshopPage';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './components/Header/header';
import Home from './components/Home/home';

function App() {

  const [petshops, setPetshops] = useState ();

  const getPetshops = async () => {

    try{
      const response = await api.get("/petshop");
      setPetshops(response.data);}
    catch (err){
      console.log(err);}
  };

  useEffect(()=> {
    getPetshops();
  },[])

  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/best-petshop" element={<BestPetShopPage petshops={petshops} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
