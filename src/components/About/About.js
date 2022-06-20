import './About.scss';
import { Link } from 'react-router-dom';
import img1 from '../../img/2.webp';
import img2 from '../../img/11.webp';
import art1 from '../../img/art1.jpg';
import art2 from '../../img/art2.jpg';

export default function About() {
    return (
      <section id="about-me" className="about-me">
        <h1>This is about me</h1>
        <div className="about-me__box">
          <Link to='/gallery'>
            <button>Gallery 
              <div className="about-me__box__img">
                  <img src={img1} className="img1" alt="image1"/>
                  <img src={img2} className="img2" alt="image1"/>
                  <img src={art1} className="art1" alt="image1"/>
                  <img src={art2} className="art2" alt="image1"/>
              </div>
            </button>
          </Link>
        </div>   
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?</p>
      </section>
    );
  }
