
import { images } from '../../constants';
import  BlurryLazyLoad  from '../../components/BlurryLazyLoad/BlurryLazyLoad'
import './Header.css';
import { SubHeading } from '../../components';



const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Discover a world of refined dining at Gericht, where every meal is an orchestrated masterpiece, meticulously crafted to delight your senses. </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    
  <div className=' app__wrapper_img blur__load' loading='lazy' style={{backgroundImage: `url(${images.welcomeSmall})` }} >
    <img src={images.welcome} alt="header_img"   style={{  objectFit: 'cover', objectPosition: 'center'}} />
    <BlurryLazyLoad />
  </div>
      

  </div>


);

export default Header;
