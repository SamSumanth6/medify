import './Specialisation.css';
import Dentistry from '../../assets/Dentistry.svg';
import Stethoscope from '../../assets/Stethoscope.svg';
import Cardiology from '../../assets/Heart Rate.svg';
import MRI from '../../assets/Heart Rate Monitor.svg';
import Blood from '../../assets/Blood Sample.svg';
import Piscologist from '../../assets/Immune.svg';
import Laboratory from '../../assets/Drugstore.svg';
import XRay from '../../assets/X-Ray.svg';


const Specialisation = ()=>{
    return(
        <div className='spec-container'>
            <p className='Heading'>Find by specialisation</p>
            <div className='spec-items'>
                <div className="line1">
                    <div className="cards-special"><div><img src={Dentistry} alt="Dentistry" /></div><div><p>Dentistry</p></div></div>
                    <div className="cards-special"><div><img src={Stethoscope} alt="Stethoscope" /></div><div><p>Primary Care</p></div></div>
                    <div className="cards-special"><div><img src={Cardiology} alt="Cardiology" /></div><div><p>Cardiology</p></div></div>
                    <div className="cards-special"><div><img src={MRI} alt="MRI" /></div><div><p>MRI Resonance</p></div></div>
                </div>
                <div className="line2">
                    <div className="cards-special"><div><img src={Blood} alt="Blood" /></div><div><p>Blood Test</p></div></div>
                    <div className="cards-special"><div><img src={Piscologist} alt="Piscologist" /></div><div><p>Piscologist</p></div></div>
                    <div className="cards-special"><div><img src={Laboratory} alt="Laboratory" /></div><div><p>Laboratory</p></div></div>
                    <div className="cards-special"><div><img src={XRay} alt="XRay" /></div><div><p>X-Ray</p></div></div>
                </div>
            </div>
            <div className='btn'>
                <button className='view-btn'>View All</button>
            </div>
        </div>
    )
}

export default Specialisation;