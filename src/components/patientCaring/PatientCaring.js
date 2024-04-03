import './PatientCaring.css';
import PCimg from '../../assets/patient-caring.svg';
import { MdVerified } from "react-icons/md";

const PatientCaring = ()=>{
    return(
        <div className='PC-container'>
            <div>
                <img src={PCimg} alt="PCimg" />
            </div>
            <div>
                <p className='head'>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
                <p className='head2'>Patient <span>Caring</span></p>
                <p className='para'>Our goal is to deliver quality of care in a courteous, respectful, and<br/> compassionate manner. We hope you will allow us to care for you and<br/> strive to be the first and best choice for healthcare.</p>
                <p className="statements"><MdVerified className='verified'/>Stay Updated About Your Health</p>
                <p className="statements"><MdVerified className='verified'/>Check Your Results Online</p>
                <p className="statements"><MdVerified className='verified'/>Manage Your Appointments</p>

            </div>
        </div>
    )
}

export default PatientCaring;