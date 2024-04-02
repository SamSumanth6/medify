import './NavBar.css'
import navLogo from '../../navLogo.svg'

const NavBar = ()=>{

    return(
        <div>
            <div className="headerLine">
                <p>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
            </div>
            <div className="navBar">
                <div className='navLogo'>
                    <img src={navLogo} alt="Nav-logo" />
                </div>
                <div className='list-item'>
                    <ul>
                        <li>
                            <p>Find Doctors</p>
                        </li>
                        <li>
                            <p>Hospitals</p>
                        </li>
                        <li>
                            <p>Medicines</p>
                        </li>
                        <li>
                            <p>Surgeries</p>
                        </li>
                        <li>
                            <p>Software for Provider</p>
                        </li>
                        <li>
                            <p>Facilities</p>
                        </li>
                        <li>
                            <button className='booking-btn'>My Bookings</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;