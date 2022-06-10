import './Contact.scss';
import { Link } from 'react-router-dom';
import img10 from '../../img/10.webp';

export default function Contact() {
    return (
        <section id="contact" className="contact">
          <h1>Get in touch with me</h1>
          
          <div className="contact-box">
            <form action="https://formsubmit.co/pl.catalina97@gmail.com " method="POST">
              <label htmlFor="name"></label>
              <input type="text" id="name" name="name" required placeholder='Name*'/>

              <label htmlFor="email"></label>
              <input type="text" id="email" name="email" required placeholder='Email*'/>

              <input type="hidden" name="_next" defaultValue="http://localhost:3000/message" />
              <label htmlFor="subject"></label>

              <input type="text" id="subject" name="subject" placeholder='Subject' />

              <label htmlFor="message"></label>
              <textarea id="comment" name="comment" placeholder='Your message' style={{height: '200px'}} alt="Textarea" defaultValue={""} />

              <div className="contact-submit">
                <input type="submit" value="Send" />
              </div>
            </form>
            <img src={img10} alt="Image1"/>
          </div>  

          <div className="contact-blog">
            <Link to='/blog'>
              <h2>Visit my blog<i className="fas fa-chevron-right"></i></h2>
            </Link> 
          </div>  
        </section>
     );
}
