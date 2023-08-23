import { images } from '../../constants';
import { SubHeading } from '../../components';
import {BsInstagram } from 'react-icons/bs';

const productpage02 = () => {
  return (
    <div>
    <div className="app__gallery flex__center " style={{backgroundImage: `url(${images.restaurant})` , backgroundSize: 'cover', paddingBottom: '15%',paddingTop: '15%'}}>

      
    <div className="app__gallery-content">
    <SubHeading title="Heavenly" />
    <h1 className="headtext__cormorant">Breakfasts</h1>
    <p className="p__opensans" style={{ color: '#fff', marginTop: '2rem', marginBottom: '2rem' }}> Indulge in the art of morning dining, where culinary innovation meets sumptuous flavors, and each bite is a celebration of the dawn.</p>
    
    <div className="app__gallery-images_container app__gallery-images_card flex__center">
        
        <img src={images.gallery02} alt='breakfast'/>
        <BsInstagram className="gallery__image-icon" />

    </div>


    </div>

    </div>

    <div style={{width:'100%', backgroundColor: 'var(--color-black)' , padding:'5%'}}>
    <h1 className="headtext__cormorant"  >Truffle-Infused Eggs Benedict</h1>
    <h6 className="p__opensans">Elevate your morning ritual with our Truffle-Infused Eggs Benedict. Silky poached eggs, draped in velvety hollandaise sauce kissed by truffle essence, rest atop a toasted brioche, creating a divine union of flavors fit for royalty.</h6>
    <br/> <br/>
    <div className='p__light_opensans '> 
    Ingredients: <br/> <br/>

    <ul>
      <li>4 large eggs</li>
      <li>2 English muffins, split and toasted</li>
      <li>8 slices Canadian bacon or smoked salmon</li>
      <li>1 tablespoon white vinegar</li>
      <li>2 teaspoons truffle oil</li>
      <li>2 teaspoons unsalted butter</li>
      <li>Salt and freshly ground black pepper, to taste</li>
      <li>Chopped chives or parsley, for garnish</li>
    </ul>

    <br/>
    Instructions: <br/> <br/>

    <ol>
      <li>Fill a large pot with water and bring it to a gentle simmer. Add the white vinegar to the water.</li>
      <li>Crack each egg into a separate small bowl or ramekin.</li>
      <li>Create a gentle whirlpool in the simmering water by stirring it with a spoon. Gently slide the eggs, one at a time, into the swirling water.</li>
      <li>Poach the eggs for about 3-4 minutes for a soft, runny yolk or longer for a firmer yolk.</li>
      <li>While the eggs are poaching, heat a small pan over medium heat and melt the butter.</li>
      <li>Once melted, stir in the truffle oil and season with a pinch of salt and freshly ground black pepper.</li>
      <li>Toast the English muffin halves until they are golden and crispy.</li>
      <li>Place two slices of Canadian bacon or smoked salmon on each toasted muffin half.</li>
      <li>Using a slotted spoon, carefully remove the poached eggs from the water and place one egg on top of each muffin half.</li>
      <li>Drizzle the truffle-infused butter over the poached eggs and garnish with chopped chives or parsley.</li>
      <li>Season with a sprinkle of salt and freshly ground black pepper.</li>
      <li>Serve the Truffle-Infused Eggs Benedict immediately, allowing the luscious yolk and aromatic truffle essence to delight your senses.</li>
    </ol>


    </div>
    </div>
    
    <div style={{width:'100%', height:'20px', backgroundColor: 'var(--color-black)' , padding:'5%'}}></div>

    </div>
  )
}

export default productpage02