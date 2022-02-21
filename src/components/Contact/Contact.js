import classes from './Contact.scss';


export default function Contact() {
    return (
        <section id="contact">
        <h1>Contact</h1>
        <div className="contact__form">
      <form action="https://formsubmit.co/nemeth0220@gmail.com" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email address</label>
        <input type="text" id="email" name="email" required />
        <input type="hidden" name="_next" defaultValue="http://lac0220.github.io/message.html" />
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" />
        <label htmlFor="message">Message</label>
        <textarea id="comment" name="comment" required style={{height: '200px'}} alt="Textarea" defaultValue={""} />
        <input type="submit" defaultValue="SEND" />
      </form>
    </div>
    </section>
  );
}
