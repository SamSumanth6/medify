import NavBar from './components/navBar/NavBar';
import './App.css';
import HeroSection from './components/heroSection/HeroSection';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Services/>
    </div>
  );
}

export default App;
