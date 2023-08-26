import './App.css';
import BestPetShopPage from './pages/bestPetshopPage/bestPetshopPage';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import AllPetshopsPage from './pages/allPetshopPage/allPetshopPage';

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
