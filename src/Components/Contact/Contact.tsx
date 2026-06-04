import React, { useEffect, useRef, useState } from 'react'
import './Contact.scss'
import {
  submitContactForm,
  validateContactForm,
} from '../../services/contactForm';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [sendingMessage, setSendingMessage] = useState(false);

    useEffect(() => {
      if (!successMessage) return;
      const timer = window.setTimeout(() => setSuccessMessage(false), 6000);
      return () => window.clearTimeout(timer);
    }, [successMessage]);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSendingMessage(true);
        setErrorMessage(null);
        setSuccessMessage(false);

        const formElement = form.current;
        if (!formElement) {
          setSendingMessage(false);
          setErrorMessage('Form is not ready. Please refresh and try again.');
          return;
        }

        const formData = new FormData(formElement);
        const fields = {
          name: String(formData.get('user_name') ?? ''),
          email: String(formData.get('user_email') ?? ''),
          message: String(formData.get('message') ?? ''),
        };

        const validationError = validateContactForm(fields);
        if (validationError) {
          setSendingMessage(false);
          setErrorMessage(validationError);
          return;
        }

        try {
          await submitContactForm(fields);
          setSendingMessage(false);
          setSuccessMessage(true);
          formElement.reset();
        } catch (error) {
          setSendingMessage(false);
          const message =
            error instanceof Error
              ? error.message
              : 'Your message could not be sent. Please try again later.';
          setErrorMessage(message);
          console.error('Contact form error:', error);
        }
    }

  return (
    <div id='contact' className='contact-section'>
        <h1>Contact</h1>
        {successMessage && (
          <p className="contact-section__feedback contact-section__feedback--success" role="status">
            Your message has been sent successfully!
          </p>
        )}
        {errorMessage && (
          <p className="contact-section__feedback contact-section__feedback--error" role="alert">
            {errorMessage}
          </p>
        )}
        <div className='form-section'>
        <div className='socialMedia'>
            <h2>Social Media</h2>
            <ul>
                <li><a href="https://www.facebook.com/profile.php?id=100087744541490" target='_blank'
                rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookSquare/></a></li>
                <li><a href="https://www.instagram.com/sajad1.0/" className='insta' target='_blank'
                rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram/></a></li>
                <li><a href="https://www.linkedin.com/in/sajjad-ghaderi-7230821aa/" className='linke' target='_blank'
                rel="noopener noreferrer" aria-label="LinkedIn">
                <BsLinkedin/></a></li>
                <li><a href="https://github.com/Sajad1-0" className='github' target='_blank'
                rel="noopener noreferrer" aria-label="GitHub">
                <FaGithubSquare/></a></li>
            </ul>
        </div>
        <form ref={form} onSubmit={sendEmail} noValidate>
            <label className='name'>Name:
            <input type="text" name='user_name' required minLength={2} autoComplete="name" /></label>
            <label className='email'> Email:
            <input type="email" name='user_email' required autoComplete="email" /></label>
            <label className='message'>Message:
            <textarea name='message' required minLength={10} /></label>
            <input
              type="submit"
              value={sendingMessage ? 'Sending...' : 'Send'}
              disabled={sendingMessage}
              className='submit'
            />
        </form>
        </div>
    </div>
  )
}

export default Contact
