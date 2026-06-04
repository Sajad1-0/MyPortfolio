/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_CONTACT_EMAIL?: string;
    REACT_APP_FORMSPREE_FORM_ID?: string;
    REACT_APP_WEB3FORMS_ACCESS_KEY?: string;
    REACT_APP_EMAILJS_SERVICE_ID?: string;
    REACT_APP_EMAILJS_TEMPLATE_ID?: string;
    REACT_APP_EMAILJS_PUBLIC_KEY?: string;
  }
}
