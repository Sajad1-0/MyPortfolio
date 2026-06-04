import emailjs from '@emailjs/browser';

export interface ContactFormFields {
  name: string;
  email: string;
  message: string;
}

/**
 * Validate the contact form locally before we ever hit the network.
 * Returns a user-facing error message, or null when the input is valid.
 */
export const validateContactForm = (fields: ContactFormFields): string | null => {
  const name = fields.name.trim();
  const email = fields.email.trim();
  const message = fields.message.trim();

  if (name.length < 2) {
    return 'Please enter your name (at least 2 characters).';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return 'Please enter a valid email address.';
  }

  if (message.length < 10) {
    return 'Your message is a little short — please write at least 10 characters.';
  }

  return null;
};

export const submitContactForm = async (fields: ContactFormFields): Promise<void> => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'Email service is not configured. Please reach out via LinkedIn or GitHub for now.',
    );
  }

  const templateParams = {
    user_name: fields.name.trim(),
    user_email: fields.email.trim(),
    message: fields.message.trim(),
  };

  try {
    await emailjs.send(serviceId, templateId, templateParams, { publicKey });
  } catch (error) {
    const detail = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Could not send message right now (${detail}). Please try again later.`);
  }
};
