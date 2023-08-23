import {images} from '../../constants'
import BlurryLazyLoad from '../../components/BlurryLazyLoad/BlurryLazyLoad';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='G letter'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='spoon img' className='spoon__img'/>
        <p className="p__opensans">Gericht's evolution is an ongoing journey. Our dedication to pushing culinary boundaries and our unwavering commitment to guest satisfaction continue to shape our identity. We are a canvas for culinary expression and a platform for artistic creativity.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center blur__load' loading='lazy' style={{backgroundImage: `url(${images.knifeSmall})` }} > 
       <img src={images.knife} alt='knife' loading='lazy' style={{  objectFit: 'cover', objectPosition: 'center'}} />
       <BlurryLazyLoad />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">As we celebrate our history and continue to write our culinary story, we invite you to join us on this journey. Whether you're a first-time guest or a loyal patron, you are an integral part of Gericht's legacy. Let us create memorable moments together.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
