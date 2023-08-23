import { images } from '../../constants';
import { SubHeading } from '../../components';

const Productpage04 = () => {
  return (
    <div>
    <div className="app__gallery flex__center " style={{backgroundImage: `url(${images.food})`, backgroundSize: 'cover',paddingBottom: '15%',paddingTop: '15%'}}>

      
    <div className="app__gallery-content">
    <SubHeading title="The Best" />
    <h1 className="headtext__cormorant">Main Courses</h1>
    <p className="p__opensans" style={{ color: '#fff', marginTop: '2rem', marginBottom: '2rem' }}>Prepare to be captivated by the culinary opus that is our Main Courses selection. Each dish is a testament to our unwavering commitment to crafting perfection on a plate, where flavors, textures, and presentation converge in an exquisite symphony.</p>

    </div>

    </div>

    <div style={{width:'100%', backgroundColor: 'var(--color-black)' , padding:'5%'}}>
    <h1 className="headtext__cormorant"  >Saffron-kissed Lobster Risotto</h1>
    <h6 className="p__opensans">Evoke your senses with the Saffron-kissed Lobster Risotto, a masterpiece of culinary finesse. Creamy Arborio rice, gently caressed by the rich embrace of saffron, cradles succulent pieces of lobster that have been poached to tender perfection. This dish is a harmonious marriage of land and sea.</h6>
    <br/> <br/>
    <div className='p__light_opensans '> 
    Ingredients: <br/> <br/>

    <ul>
      <li>1 1/2 cups Arborio rice</li>
      <li>2 cups lobster broth (or seafood broth)</li>
      <li>1/2 cup dry white wine</li>
      <li>1/2 cup chopped shallots</li>
      <li>2 cloves garlic, minced</li>
      <li>1/4 teaspoon saffron threads</li>
      <li>1/2 cup heavy cream</li>
      <li>1/2 cup grated Parmesan cheese</li>
      <li>2 tablespoons unsalted butter</li>
      <li>1 tablespoon olive oil</li>
      <li>1 pound fresh lobster meat, cooked and chopped</li>
      <li>Salt and freshly ground black pepper, to taste</li>
      <li>Fresh chives, finely chopped, for garnish</li>
    </ul>

    <br/>
    Instructions: <br/> <br/>

    <ol>
      <li>In a small bowl, steep the saffron threads in 2 tablespoons of warm lobster broth. Set aside.</li>
      <li>In a large pan, heat the olive oil and 1 tablespoon of butter over medium heat. Sauté the chopped shallots and minced garlic until they are translucent and fragrant.</li>
      <li>Add the Arborio rice to the pan and cook for 2-3 minutes, stirring constantly, until the rice is lightly toasted.</li>
      <li>Pour in the dry white wine and cook until the liquid is mostly absorbed by the rice.</li>
      <li>Begin adding the lobster broth to the rice, one ladleful at a time, stirring constantly and allowing the liquid to be absorbed before adding more.</li>
      <li>After adding about half of the broth, stir in the saffron-infused broth to impart a golden hue to the risotto.</li>
      <li>Continue adding the remaining broth, stirring gently and allowing the rice to cook until it is creamy and al dente.</li>
      <li>Stir in the heavy cream, grated Parmesan cheese, and the remaining tablespoon of butter. Season with salt and freshly ground black pepper to taste.</li>
      <li>Gently fold in the cooked and chopped lobster meat, allowing it to heat through.</li>
      <li>Remove the pan from heat and let the risotto rest for a minute to allow the flavors to meld. Serve the Saffron-kissed Lobster Risotto in elegant bowls, garnished with a sprinkle of fresh chives for a burst of color and a subtle oniony note.</li>
    </ol>


    </div>
    </div>

    <div style={{width:'100%', height:'20px', backgroundColor: 'var(--color-black)' , padding:'5%'}}></div>

    </div>
  )
}

export default Productpage04