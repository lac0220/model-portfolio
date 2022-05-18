import classes from './Home.scss';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import img1 from '../../img/1.webp';
import img2 from '../../img/2.webp';
import img3 from '../../img/3.webp';
import img4 from '../../img/4.webp';

export default function Home() {
    return (
        <section id="home" className="home">
          <ul className="home__name">
            <li>Catalina Plamadeala</li>
             <li>Model | Artist</li>
          </ul> 
          <h1>"Some text ot quote here"</h1>
          <section className='home__slider'>
            <AliceCarousel autoPlay autoPlayInterval="2000" infinite autoPlayStrategy="none" animationDuration="2000" disableButtonsControls="false">
                  <img src={img1}/>
                  <img src={img2}/>
                  <img src={img3}/>
                  <img src={img4}/>
            </AliceCarousel>
          </section>
          <div className="socialmedia">
            <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank" alt="Instagram logo"><i className="fab fa-instagram"/></a>    {/* instagram */}
            <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank" alt="Facebook logo"><i className="fab fa-facebook" /></a>    {/* facebook */}
            <a href="https://www.linkedin.com/in/catalinaplamadeala97" target="_blank" alt="Linkedin logo"><i className="fab fa-linkedin" /></a>    {/* linkedin */}
          </div>   
        </section>
    );
  }


 