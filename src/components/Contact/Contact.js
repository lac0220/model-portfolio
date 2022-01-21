import classes from './Contact.scss';


export default function Contact() {
    return (
        <section>
        <h1 id="contact">Contact</h1>
        <div className="contact">
          <div className="contact__form">
            <form action="https://formsubmit.co/nemeth0220@gmail.com" method="POST">
              <label className="contact__form__name" htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
              <label className="contact__form__email" htmlFor="email">Email address</label>
              <input type="text" id="email" name="email" required />
              <input type="hidden" name="_next" defaultValue="http://localhost:3000/thankyou.html" />
              <label className="contact__form__subject" htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
              <label className="contact__form__message" htmlFor="message">Message</label>
              <textarea id="comment" name="comment" required style={{height: '200px'}} defaultValue={""} />
              <input className="contact__form__submitbtn" type="submit" defaultValue="SEND" />
            </form>
          </div>
          <div className="contact__text">
            <div className="contact__text__phone animated bounce">
              <img className="contact__text__phone__img1" src="/img/phone.jpg" alt="Contact logo" />
              <p>+420 ..........</p>
            </div>
            <div className="contact__text__email animated bounce">
              <img className="contact__text__email__img2" src="/img/contact.jpg" alt="Contact logo" />
              <p>........@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
