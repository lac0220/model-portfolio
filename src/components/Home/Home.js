import classes from './Home.scss';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from '../../img/1.webp';
import img2 from '../../img/2.webp';
import img3 from '../../img/3.webp';
import img4 from '../../img/4.webp';




export default function Home() {
    return (
        <section id="home">
        <div className="home">
          <ul className="home__name">
            <p>Catalina Plamadeala</p>
            <p>Model | Artist</p>
          </ul>
        </div> 
        <div className="home__socialmedia">
  <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank" alt="Instagram logo"><i className="fab fa-instagram"/></a>    {/* instagram */}
  <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank" alt="Facebook logo"><i className="fab fa-facebook" /></a>    {/* facebook */}
  <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank" alt="Linkedin logo"><i className="fab fa-linkedin" /></a>    {/* linkedin */}
</div>    
<h1>"Some quote here"</h1>
<section className='slider'>
<AliceCarousel autoPlay autoPlayInterval="2000" infinite autoPlayStrategy="none" animationDuration="2000" disableButtonsControls="false">
      <img src={img1} className="sliderimg"/>
      <img src={img2} className="sliderimg"/>
      <img src={img3} className="sliderimg"/>
      <img src={img4} className="sliderimg"/>
</AliceCarousel>
</section>
      </section>
    );
  }


 