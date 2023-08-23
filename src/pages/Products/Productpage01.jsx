
import { images } from '../../constants';
import { SubHeading } from '../../components';
import {BsInstagram } from 'react-icons/bs'

const productpage01 = () => {

  return (
    <div>
    <div className="app__gallery flex__center " style={{backgroundImage: `url(${images.serving})` , backgroundSize: 'cover', paddingBottom: '15%',paddingTop: '15%'}}>

      
    <div className="app__gallery-content black__container">
    <SubHeading title="Delicious" />
    <h1 className="headtext__cormorant"  >Appetizers</h1>
    <p className="p__opensans" style={{ color: '#fff' , marginTop: '2rem', marginBottom: '2rem' }}>
    Indulge in a tantalizing assortment of appetizers that set the tone for an extraordinary dining affair. 
    <br/> Our chefs have ingeniously combined the finest ingredients to create small masterpieces that ignite your taste buds and awaken your palate.
    </p>
    

    <div className="app__gallery-images_container app__gallery-images_card flex__center">
        
        <img src={images.gallery01} alt='breakfast'/>
        <BsInstagram className="gallery__image-icon" />
    </div>
    </div>

    </div>

    <div style={{width:'100%', backgroundColor: 'var(--color-black)' , padding:'5%'}}>
    <h1 className="headtext__cormorant"  >Sun-Kissed Bruschetta Bliss</h1>
    <h6 className="p__opensans">Savor the burst of summer flavors with our Sun-Kissed Bruschetta Bliss. Juicy vine-ripened tomatoes, fragrant basil, and the finest olive oil dance harmoniously atop crusty artisanal bread, delivering a symphony of freshness in every bite.</h6>
    <br/>  <br/>
    <div className='p__light_opensans '> 
    Ingredients: <br/> <br/>

    <ul>
      <li>4-5 ripe vine-ripened tomatoes, diced</li>
      <li>1/4 cup fresh basil leaves, chiffonade</li>
      <li>2 cloves garlic, minced</li>
      <li>1 tablespoon extra-virgin olive oil</li>
      <li>1 teaspoon balsamic vinegar</li>
      <li>Salt and freshly ground black pepper, to taste</li>
      <li>1 baguette, sliced diagonally into 1/2-inch thick pieces</li>
      <li>2 tablespoons high-quality olive oil, for drizzling</li>
    </ul>

    <br/>
    Instructions: <br/> <br/>

    <ol>
      <li>In a bowl, combine the diced tomatoes, minced garlic, chiffonade basil, extra-virgin olive oil, and balsamic vinegar.</li>
      <li>Gently toss the mixture to combine. Season with salt and freshly ground black pepper to taste.</li>
      <li>Allow the tomato mixture to marinate for about 15-20 minutes, allowing the flavors to meld together.</li>
      <li>While the mixture is marinating, preheat your oven to 400°F (200°C).</li>
      <li>Place the baguette slices on a baking sheet and drizzle them with high-quality olive oil.</li>
      <li>Toast the baguette slices in the preheated oven for 5-7 minutes, or until they are golden and crispy.</li>
      <li>Once toasted, let the baguette slices cool slightly before assembling the bruschetta.</li>
      <li>Spoon the marinated tomato mixture generously onto each baguette slice.</li>
      <li>Drizzle a touch of extra-virgin olive oil over the assembled bruschettas for an added layer of richness.</li>
      <li>Serve the Sun-Kissed Bruschetta Bliss immediately, allowing your guests to experience the vibrant flavors and contrasting textures in every bite.</li>
    </ol>


    </div>
    </div>

  

    <div style={{width:'100%', height:'20px', backgroundColor: 'var(--color-black)' , padding:'5%'}}></div>

    </div>
  )
}

export default productpage01