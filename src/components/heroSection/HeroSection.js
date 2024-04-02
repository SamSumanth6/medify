import './HeroSection.css'
import HeroDocImg from '../../hero-Doc.svg'

const HeroSection = ()=>{
    return(
        <div className='hero'>
            <div className='hero-section'>
                <p className='Heading'>Skip the travel! Find Online <br/><span className='medical'>Medical <span className='blue'>Centers</span></span></p>
                <p className='sub-heading'>Connect instantly with a 24x7 specialist or choose to<br/> video visit a particular doctor.</p>
                <button className='find-centers-btn'>Find Centers</button>
            </div>
            <div className='image'>
                <img src={HeroDocImg} alt="" />
            </div>
        </div>
    )
}

export default HeroSection