import './App.css';
import api from './api/axiosConfig'
import {useState, useEffect} from 'react';
import BestPetShopPage from './api/bestPetshopPage';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';

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
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/best-petshop">Melhor petshop</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/best-petshop" element={<BestPetShopPage petshops={petshops} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <p>Home Page</p>;
}

export default App;
