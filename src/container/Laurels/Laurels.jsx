import { SubHeading, MenuItem } from '../../components';
import BlurryLazyLoad from '../../components/BlurryLazyLoad/BlurryLazyLoad';
import { data, images } from '../../constants';

import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img blur__load" loading='lazy' style={{backgroundImage: `url(${images.laurelsSmall})` }} >
      <img src={images.laurels} alt="laurels_img" loading='lazy' style={{  objectFit: 'cover', objectPosition: 'center'}}/>
      < BlurryLazyLoad />
    </div>
  </div>
);

export default Laurels;
