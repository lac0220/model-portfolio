import './Message.scss';
import { NavHashLink } from 'react-router-hash-link';

export default function Contact() {
    return (
        <div className="message">
            <h1>Thank you for your message</h1>
            <h1>I will get back to you as soon as possible</h1>
            <h2>Back to the 
                <NavHashLink
                    to="/#home"
                    activeClassName="active-link"
                    exact
                    >
                    home page
                </NavHashLink>
            </h2>
      </div>
  );
}