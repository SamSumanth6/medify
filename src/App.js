import NavBar from './components/navBar/NavBar';
import './App.css';
import HeroSection from './components/heroSection/HeroSection';
import Services from './components/services/Services';
import Offers from './components/offers/Offers';
import Specialisation from './components/specialisation/Specialisation';
import Medical from './components/medicalSpecialist/Medical';
import PatientCaring from './components/patientCaring/PatientCaring';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Services/>
      <Offers/>
      <Specialisation/>
      <Medical/>
      <PatientCaring/>
    </div>
  );
}

export default App;
