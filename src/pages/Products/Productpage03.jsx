import { images } from '../../constants';
import { SubHeading } from '../../components';


const Productpage03 = () => {
  return (
    <div>
    <div className="app__gallery flex__center " style={{backgroundImage: `url(${images.wine})` , backgroundSize: 'cover', paddingBottom: '15%',paddingTop: '15%'}}>

      
    <div className="app__gallery-content black__container">
    <SubHeading title="Exquisite" />
    <h1 className="headtext__cormorant"  >Drinks</h1>
    <p className="p__opensans" style={{ color: '#fff' , marginTop: '2rem', marginBottom: '2rem' }}> Gericht's beverage program focuses on artisanal spirits and mirrors its cuisine, letting the high quality ingredients shine. 
    </p>
    
    </div>

    </div>


    <div style={{width:'100%', backgroundColor: 'var(--color-black)' , padding:'5%'}}>
    <h1 className="headtext__cormorant"  >Golden Lychee Martini</h1>
    <h6 className="p__opensans">Raise a glass to opulence with our Golden Lychee Martini. The ethereal sweetness of lychee nectar meets the smooth embrace of premium vodka, creating a libation that shimmers like pure gold. Adorned with a delicate lychee garnish, this martini is a toast to extravagance.</h6>
    <br/> <br/>
    <div className='p__light_opensans '> 
    Ingredients: <br/> <br/>

    <ul>
      <li>2 oz premium vodka</li>
      <li>1 oz lychee liqueur</li>
      <li>1 oz fresh lychee juice</li>
      <li>1/2 oz fresh lemon juice</li>
      <li>1/2 oz honey syrup (mix equal parts honey and hot water, then cool)</li>
      <li>Edible gold leaf or gold dust, for garnish</li>
      <li>Fresh lychee, for garnish</li>
    </ul>

    <br/>
    Instructions: <br/> <br/>

    <ol>
      <li>Begin by chilling your martini glass in the freezer or by filling it with ice water. A frosty glass ensures your elixir remains impeccably chilled.</li>
      <li>In a cocktail shaker, embark on your alchemical journey. Combine 2 oz of premium vodka, a refined spirit that forms the foundation of this libation.</li>
      <li>To this elixir, add 1 oz of lychee liqueur. This ethereal infusion lends the cocktail its distinct sweetness and essence, setting the stage for enchantment.</li>
      <li>Pour in 1 oz of fresh lychee juice, extracted from these delicate fruits. The nectar captures the very essence of indulgence, creating a symphony of flavor with the other elements.</li>
      <li>The song continues with 1/2 oz of fresh lemon juice. The citrusy notes lend a refreshing and bright dimension, harmonizing the composition.</li>
      <li>To balance the flavors, introduce 1/2 oz of honey syrup—a blend of pure honey and hot water cooled to perfection. This elixir of sweetness balances the ensemble.</li>
      <li>Your alchemical symphony requires a dance. Shake the cocktail shaker vigorously with ice, allowing the elements to meld and chill in harmonious unity.</li>
      <li>With finesse, strain the elixir into your chilled martini glass. The anticipation builds as you witness the golden elixir gracefully flowing into the vessel.</li>
      <li>Elevate your creation to an even higher realm. Gently place a delicate piece of edible gold leaf upon the surface or bestow it with a sprinkle of edible gold dust—a touch of pure opulence.</li>
      <li>As a final touch, skewer a fresh lychee and delicately rest it upon the rim, a testament to the flavors that lie within.</li>
    </ol>


    </div>
    </div>

    <div style={{width:'100%', height:'20px', backgroundColor: 'var(--color-black)' , padding:'5%'}}></div>

    </div>
  )
}

export default Productpage03