import './App.css';
import BestPetShopPage from './components/BestPetshopPage/bestPetshopPage';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './components/Header/header';
import Home from './components/Home/home';
import AllPetshopsPage from './components/allPetshopPage';

function App() {

  return (
    <Router>
      <div className="App" >
        <Header/>
        <Routes>
          <Route path="/best-petshop" element={<BestPetShopPage />} />
          <Route path="/all-petshops" element={<AllPetshopsPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
