import classes from './Contact.scss';


export default function Contact() {
    return (
        <section id="contact">
        <h1>Leave a message</h1>
        <div className="contact">
        <div className="contact__form">
      <form action="https://formsubmit.co/nemeth0220@gmail.com" method="POST">
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" required placeholder='Name*'/>
        <label htmlFor="email"></label>
        <input type="text" id="email" name="email" required placeholder='Email*'/>
        <input type="hidden" name="_next" defaultValue="http://lac0220.github.io/message.html" />
        <label htmlFor="subject"></label>
        <input type="text" id="subject" name="subject" placeholder='Subject' />
        <label htmlFor="message"></label>
        <textarea id="comment" name="comment" required placeholder='Your message' style={{height: '200px'}} alt="Textarea" defaultValue={""} />
        <input type="submit" value="Send" />
      </form>
    </div>
    <div className="contact__box"></div>
    </div>
    </section>
  );
}
