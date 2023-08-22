import { images } from '../../constants';
import { SubHeading } from '../../components';

const Productpage04 = () => {
  return (
    <div>
    <div className="app__gallery flex__center " style={{backgroundImage: `url(${images.food})`, backgroundSize: 'cover',paddingBottom: '15%',paddingTop: '15%'}}>

      
    <div className="app__gallery-content">
    <SubHeading title="The Best" />
    <h1 className="headtext__cormorant">Main Courses</h1>
    <p className="p__opensans" style={{ color: '#fff', marginTop: '2rem', marginBottom: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>

    </div>

    </div>

    <div style={{width:'100%', height:'20px', backgroundColor: 'var(--color-black)' , padding:'5%'}}></div>

    </div>
  )
}

export default Productpage04