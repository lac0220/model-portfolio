import './contact.scss';
import img_contact from '../../img/Modeling/15.webp';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors} } = useForm();
    const sendEmail = (data, e) => {
    console.log(data);

    emailjs.sendForm('service_iqf6oqw', 'template_w49gu6l', e.target, 'TtX-buXBtDBrY53XD')
        .then(() => {
            navigate("/model-portfolio/message");
        }, (error) => {
            alert("Something went wrong. Please try again later");
            // console.log(error);
        });
        e.target.reset()
    };

    return (
        <div id="contact" className="contact">
            <h1>Get in touch with me</h1>
            <div className="contact-container">
                <form onSubmit={handleSubmit(sendEmail)}>
                    <label htmlFor="name">
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder='Name*' 
                            {...register("name", { required: true })} 
                        />
                        {errors.name?.type === 'required' && <span>This field is required!</span>}
                    </label>
                    <label htmlFor="email">
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            placeholder='Email*' 
                            {...register("email", { required: true })} 
                        />
                        {errors.email?.type === 'required' && <span>This field is required!</span>}
                    </label>
                    <label htmlFor="subject">
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            placeholder='Subject' 
                        />
                    </label>
                    <label htmlFor="message">
                        <textarea 
                            id="comment" 
                            name="message" 
                            placeholder='Your message' 
                            style={{height: '200px' }} 
                            alt="Textarea" 
                        />
                    </label>
                    <label htmlFor="contact-submit">
                        <input 
                            type="submit" 
                            value="Send" 
                        />
                    </label>
                </form>
                <img src={img_contact} alt="Contact" />
            </div> 
            <div>
                <Link to='/model-portfolio/blog'>
                    <h2>Visit my blog <FontAwesomeIcon icon={faBookmark}/></h2>
                </Link> 
            </div> 
        </div>
    );
};