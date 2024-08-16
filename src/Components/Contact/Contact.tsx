import React, {useState, useRef} from 'react'
import './Contact.scss'
import emailjs from '@emailjs/browser';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";




const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState<number | string | null>(null);
    const [sendingMessage, setSendingMessage] = useState(false);
    
    // Function for sending email 
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSendingMessage(true);
        setErrorMessage(null); 

        if (form.current) {
            emailjs
            .sendForm('service_d836brr', 'template_6jevdir', 
                form.current, 'oyEluMZ5i8XO6M_50'
            )
            .then ( () => {
                setSendingMessage(false);
                setSuccessMessage(true);
                form.current?.reset();  // Reset form fields after sending
            }, (error) => {
                setSendingMessage(false);
                setErrorMessage(`Your Message doesn't sent, Please try again later`);
                console.error('Error occurred', error);
            })
            
        }
    }

  return (
    <div id='contact' className='contact-section'>
        <h1>Contact</h1>
        {successMessage && <p style={{color: 'green'}}>
        Your message has been sent successfully!</p>}
        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        <div className='form-section'>
        <div className='socialMedia'>
            <h2>Social Media</h2>
            <ul>
                <li><a href="https://www.facebook.com/profile.php?id=100087744541490" target='_blank'
                rel="noopener noreferrer">
                <FaFacebookSquare/></a></li>
                <li><a href="https://www.instagram.com/sajad1.0/" className='insta' target='_blank'
                rel="noopener noreferrer">
                <FaInstagram/></a></li>
                <li><a href="https://www.linkedin.com/in/sajjad-ghaderi-7230821aa/" className='linke' target='_blank'
                rel="noopener noreferrer">
                <BsLinkedin/></a></li>
                <li><a href="https://github.com/Sajad1-0" className='github' target='_blank' 
                rel="noopener noreferrer">
                <FaGithubSquare/></a></li>
            </ul>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <label className='name'>Name:
            <input type="text" name='from_name' required/></label>
            <label className='email'> Email:
            <input type="email" name='from_email' required /></label>
            <label className='message'>Message:
            <textarea name='message' required/></label>
            <input type="submit" value={sendingMessage ? 'Sending...' : 'Send'}
            disabled={sendingMessage} className='submit'/>
        </form>
        </div>
    </div>
  )
}

export default Contact