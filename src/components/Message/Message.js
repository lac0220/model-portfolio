import './message.scss';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div className="message">
            <h1>Thank you for your message</h1>
            <h1>I will get back to you as soon as possible</h1>
            <h2>Back to the <Link to="/model-portfolio">home page</Link></h2>
        </div>
    );
}