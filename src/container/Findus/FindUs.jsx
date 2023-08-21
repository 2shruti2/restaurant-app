import {images} from '../../constants'
import { SubHeading } from '../../components'
import BlurryLazyLoad from '../../components/BlurryLazyLoad/BlurryLazyLoad';

const FindUs = () => (
  <div className='app__wrapper app__bg section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact Us'/>
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
    </div>

    <div className='app__wrapper_img blur__load' loading='lazy' style={{backgroundImage: `url(${images.findusSmall})` }} >
      <img src={images.findus} loading='lazy' alt='findus' style={{  objectFit: 'cover', objectPosition: 'center'}}/>
      < BlurryLazyLoad />
    </div>
  </div>
);

export default FindUs;
