import './Offers.css';
import Offer1 from '../../offer1.svg'
import Offer2 from '../../offer2.svg'

const Offers = ()=>{

    return(
        <div className='offer-container'>
            <div><img src={Offer1} alt="Offer1" /></div>
            <div><img src={Offer2} alt="Offer2" /></div>
            <div><img src={Offer1} alt="Offer1" /></div>

        </div>
    )
}

export default Offers;