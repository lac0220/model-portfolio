import './home.scss';
import './about.scss';
import './contact.scss';
import {SlidingImages} from '../Sliding_Images/sliding_images';
import { Link } from 'react-router-dom';
import img_modeling1 from '../../img/Modeling/5.webp';
import img_modeling2 from '../../img/Modeling/6.webp';
import img_art1 from '../../img/Art/art2.webp';
import img_art2 from '../../img/Art/art1.webp';
import img_contact from '../../img/Modeling/10.webp';

export default function Home() {
    return (
        <>
            {/* home header  */}    
            <div id="home" className="home">            
                <ul>
                    <li>Catalina Plamadeala</li>
                    <li>Model | Artist</li>
                </ul> 
                <h2><i>"Life is art. Art is life. I never separate it." &#45; Ai Weiwei</i></h2>
            </div>
            <SlidingImages/>    
            {/* about me section  */}                         
            <div id="about-me" className="about-me">      
                <h1>This is about me</h1>
                <div>
                    <Link to='/catalina-plamadeala-portfolio/gallery'>
                        <button>Gallery 
                            <div>
                                <img src={img_modeling1} className="modeling1" alt="Modeling1"/>
                                <img src={img_modeling2} className="modeling2" alt="Modeling2"/>
                                <img src={img_art1} className="art1" alt="Art1"/>
                                <img src={img_art2} className="art2" alt="Art2"/>
                            </div>
                        </button>
                    </Link>
                </div>   
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?</p>
            </div>  
            {/* contact section  */}                         
            <div id="contact" className="contact">
                <h1>Get in touch with me</h1>
                <div className="contact-container">
                    <form action="https://formsubmit.co/pl.catalina97@gmail.com " method="POST">
                        <label htmlFor="name">
                            <input type="text" id="name" name="name" required placeholder='Name*'/>
                        </label>
                        <label htmlFor="email">
                            <input type="text" id="email" name="email" required placeholder='Email*'/>
                            <input type="hidden" name="_next" defaultValue="http://lac0220.github.io/catalina-plamadeala-portfolio/message.html" />
                        </label>
                        <label htmlFor="subject">
                            <input type="text" id="subject" name="subject" placeholder='Subject' />
                        </label>
                        <label htmlFor="message">
                            <textarea id="comment" name="comment" placeholder='Your message' style={{height: '200px'}} alt="Textarea" defaultValue={""} />
                        </label>
                        <label className="contact-submit">
                            <input type="submit" value="Send" />
                        </label>
                    </form>
                    <img src={img_contact} alt="Contact"/>
                </div> 
                <div>
                    <Link to='/catalina-plamadeala-portfolio/blog'>
                        <h2>Visit my blog<i className="fas fa-chevron-right"></i></h2>
                    </Link> 
                </div> 
            </div>
        </>
    );
}


 