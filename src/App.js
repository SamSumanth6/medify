import NavBar from './components/navBar/NavBar';
import './App.css';
import HeroSection from './components/heroSection/HeroSection';
import Services from './components/services/Services';
import Offers from './components/offers/Offers';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Services/>
      <Offers/>
    </div>
  );
}

export default App;
