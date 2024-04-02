import './Services.css';
import { FaSearch } from "react-icons/fa"; // Import the FaSearch icon
import Doctor from '../../Doctor.svg';
import Capsule from '../../Capsule.svg';
import Drugstore from '../../Drugstore.svg';
import Hospital from '../../Hospital.svg';
import Ambulance from '../../Ambulance.svg';




const Services = () => {
    return (
        <div className='container'>
            <div className='inputs'>
                <div className='input-container'>
                    <FaSearch className='search-icon' /> {/* Icon for the State input */}
                    <input className='input-bar' type="text" placeholder='State' />
                </div>
                <div className='input-container'>
                    <FaSearch className='search-icon' /> {/* Icon for the City input */}
                    <input className='input-bar' type="text" placeholder='City' />
                </div>
                <button className='search-btn'>
                    <FaSearch className='search-con' />Search
                </button>
            </div>
            <div className='heading'>
                <p>You may be looking for</p>
            </div>
            <div className="services">
                <div className="details">
                    <img src={Doctor} alt="Doctor" />
                    <p>Doctors</p>
                </div>
                <div className="details">
                    <img src={Drugstore} alt="Drugstore" />
                    <p>Labs</p>
                </div>
                <div className="details-hospital">
                    <img src={Hospital} alt="Hospital" />
                    <p>Hospitals</p>
                </div>
                <div className="details">
                    <img src={Capsule} alt="Capsule" />
                    <p>Medical Store</p>
                </div>
                <div className="details">
                    <img src={Ambulance} alt="Ambulance" />
                    <p>Ambulance</p>
                </div>
            </div>
        </div>
    )
}

export default Services;
