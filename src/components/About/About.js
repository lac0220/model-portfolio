import classes from './About.scss';
import { Link } from 'react-router-dom';
import img1 from '../../img/2.webp';
import img2 from '../../img/11.webp';
import img3 from '../../img/3.webp';
import img4 from '../../img/4.webp';


export default function About() {
    return (
      <section id="aboutme" className="about">
        <h1>This is about me</h1>
        <div className="about__box">
          <Link to='/gallery'>
            <button>Gallery 
              <div className="about__box__img">
                  <img src={img1} className="img1"/>
                  <img src={img2} className="img2"/>
                  <img src={img3} className="img3"/>
                  <img src={img4} className="img4"/>
              </div>
            </button>
          </Link>
          <div className="about__box__text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?</p>
            <Link to='/blog'>
            <span>Visit my blog<i className="fas fa-chevron-right"></i></span>
            </Link>
          </div>   
        </div>   
      </section>
    );
  }
