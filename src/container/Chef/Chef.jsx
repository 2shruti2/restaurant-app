import {images} from '../../constants'
import { SubHeading } from '../../components';

import './Chef.css';
import BlurryLazyLoad from '../../components/BlurryLazyLoad/BlurryLazyLoad';

const Chef = () => (
  <div className='app__bg app__wrapper section-__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse blur__load' loading='lazy' style={{backgroundImage: `url(${images.chefSmall})` }} >
      <img src={images.chef} alt='chef' loading='lazy' style={{  objectFit: 'cover', objectPosition: 'center'}}/>
      < BlurryLazyLoad />
    </div>

    <div className='app__wrapper_info' style={{paddingLeft : '5%'}}>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'> What We Believe In </h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote' >
          <img src={images.quote} alt='quote' loading='lazy' /> 
          <p className='p__opensans'> At Gericht, we celebrate the art of culinary craftsmanship .</p>
        </div>

        <p className='p__opensans'>At Gericht, we believe in celebrating every ingredient's inherent beauty, coaxing out its flavors to create a symphony of taste that resonates with your senses.</p>
      </div>
      
      <div className='app__chef-sign'>
        <p className='p__opensans'> Chef & Founder</p>
        <img src={images.sign} alt='sign'/>

      </div>

    </div>
  </div>
);

export default Chef;
