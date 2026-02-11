import './home.scss';
import './about.scss';
import img_modeling1 from '../../img/Modeling/4.webp';
import img_modeling2 from '../../img/Modeling/7.webp';
import img_art1 from '../../img/Art/art4.webp';
import img_art2 from '../../img/Art/art3.webp';
import SlidingImages from '../SlidingImages/SlidingImages';
import { Contact } from '../Contact/Contact';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    //scroll to the top once open
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []) 

    return (
        <>
            <div id="home" className="home">            
                <ul>
                    <li>Catherine Doll</li>
                    <li>Model | Artist</li>
                </ul> 
                <h2><i>"Life is art. Art is life. I never separate it." &#45; Ai Weiwei</i></h2>
            </div>
            <SlidingImages/>    
            <div id="about-me" className="about-me">      
                <h1>This is about me</h1>
                <div>
                    <Link to='/model-portfolio/gallery'>
                        <button>Gallery <FontAwesomeIcon icon={faFolderOpen}/>
                            <div>
                                <img 
                                    src={img_modeling1} 
                                    className="modeling1" 
                                    alt="Modeling1"/>
                                <img 
                                    src={img_modeling2} 
                                    className="modeling2" 
                                    alt="Modeling2"/>
                                <img 
                                    src={img_art1} 
                                    className="art1" 
                                    alt="Art1"/>
                                <img 
                                    src={img_art2} 
                                    className="art2" 
                                    alt="Art2"/>
                            </div>
                        </button>
                    </Link>
                </div>   
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?</p>
            </div>  
            <Contact/>    
        </>
    );
}