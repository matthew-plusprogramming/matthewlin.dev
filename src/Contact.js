import React from 'react';
import './styles/page.scss';
import './styles/contact.scss';

import ContactForm from './components/Contact/ContactForm';

const Contact = () => {
  return (
    <>
      <main id="contact">
        <div className="main-div">
          <div className="flex-row center">
            <h4 className="no-margin medium-text page-title">Contact</h4>
          </div>
          <div className="flex-row center fade-in-after-page-title-load flex-container">
            <h5>
              I would love to hear from you! You can reach me with the contact
              form or via one of the methods below.
            </h5>
          </div>
          <div className="flex-row center fade-in-after-page-title-load">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
