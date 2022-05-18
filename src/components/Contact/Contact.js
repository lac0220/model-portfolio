import classes from './Contact.scss';
import img10 from '../../img/10.webp';

export default function Contact() {
    return (
        <section id="contact" className="contact">
          <h1>Get in touch with me</h1>
          
          <div className="contact__box">
            <form action="https://formsubmit.co/nemeth0220@gmail.com" method="POST">
              <label htmlFor="name"></label>
              <input type="text" id="name" name="name" required placeholder='Name*'/>

              <label htmlFor="email"></label>
              <input type="text" id="email" name="email" required placeholder='Email*'/>

              <input type="hidden" name="_next" defaultValue="http://lac0220.github.io/message.html" />
              <label htmlFor="subject"></label>

              <input type="text" id="subject" name="subject" placeholder='Subject' />

              <label htmlFor="message"></label>
              <textarea id="comment" name="comment" placeholder='Your message' style={{height: '200px'}} alt="Textarea" defaultValue={""} />

              <div className="contact__submit">
                <input type="submit" value="Send" />
              </div>

            </form>
            <img src={img10}/>
          </div>   
        </section>
  );
}
