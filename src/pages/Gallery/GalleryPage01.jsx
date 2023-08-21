
import { images } from '../../constants';
import { SubHeading } from '../../components';
import {BsInstagram } from 'react-icons/bs'

const GalleryPage = () => {

  return (
    <div>
    <div className="app__gallery flex__center " style={{backgroundImage: `url(${images.serving})` , backgroundSize: 'cover', paddingBottom: '15%',paddingTop: '15%'}}>

      
    <div className="app__gallery-content black__container">
    <SubHeading title="Delicious" />
    <h1 className="headtext__cormorant"  >Appetizers</h1>
    <p className="p__opensans" style={{ color: '#fff' , marginTop: '2rem', marginBottom: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
    

    <div className="app__gallery-images_container app__gallery-images_card flex__center">
        
        <img src={images.gallery01} alt='breakfast'/>
        <BsInstagram className="gallery__image-icon" />
    </div>
    </div>

    </div>

    <div style={{width:'100%', height:'20px', backgroundColor: 'var(--color-black)' , padding:'5%'}}></div>

    </div>
  )
}

export default GalleryPage