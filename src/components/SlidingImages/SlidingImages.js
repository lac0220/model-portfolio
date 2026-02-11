import './sliding_images.scss';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import img_modeling1 from '../../img/Modeling/2.webp';
import img_modeling2 from '../../img/Modeling/11.webp';
import img_modeling3 from '../../img/Modeling/5.webp';
import img_modeling4 from '../../img/Modeling/6.webp';
import img_modeling5 from '../../img/Modeling/9.webp';

export default function SlidingImages() {
    return (
        <div className="sliding-images">
            <AliceCarousel autoPlay autoPlayInterval="2000" infinite autoPlayStrategy="none" animationDuration="2000" disableButtonsControls="false">
                <img src={img_modeling1} alt="Sliding1"/>
                <img src={img_modeling2} alt="Sliding2"/>
                <img src={img_modeling3} alt="Sliding3"/>
                <img src={img_modeling4} alt="Sliding4"/>
                <img src={img_modeling5} alt="Sliding5"/>
            </AliceCarousel>
        </div> 
    );
}