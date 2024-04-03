// Medical.js

import './Medical.css';
import DrKhan from '../../assets/dr.khan.svg';
import DrHeena from '../../assets/dr.heena.svg';
import DrAnkur from '../../assets/dr.ankur.svg';

const Medical = () => {
    return (
        <div className="medical-container">
            <p className='heading-medical'>Our Medical Specialist</p>
            <div className="cards">
                <div className="card-items">
                    <div className="img">
                        <div className='doc-img'>
                            <img src={DrKhan} alt="DrKhan" />
                        </div>
                        <div>
                            <p className='doc-name'>Dr. Ahmad Khan</p>
                        </div>
                        <div className='designation neurologist'>
                            <p className='designation' style={{ color: 'rgba(42, 167, 255, 1)' }}>Neurologist</p>
                        </div>
                    </div>
                </div>
                <div className="card-items">
                    <div className="img">
                        <div className='doc-img'>
                            <img src={DrHeena} alt="DrHeena" />
                        </div>
                        <div>
                            <p className='doc-name'>Dr. Heena Sachdeva</p>
                        </div>
                        <div>
                            <p className='designation'>Orthopadics</p>
                        </div>
                    </div>
                </div>
                <div className="card-items">
                    <div className="img">
                        <div className='doc-img'>
                            <img src={DrAnkur} alt="DrAnkur" />
                        </div>
                        <div>
                            <p className='doc-name'>Dr. Ankur Sharma</p>
                        </div>
                        <div>
                            <p className='designation'>Medicine</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Medical;
