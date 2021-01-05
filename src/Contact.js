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
          <div className="flex-row center fade-in-after-page-title-load flex-container large-bottom-margin">
            <h5>
              I would love to hear from you! You can reach me with the contact
              form or via one of the methods below.
            </h5>
          </div>
          <div
            id="contact-section"
            className="flex-row flex-container fade-in-after-page-title-load"
          >
            <ContactForm />
            <div id="contact-text">
              <div className="flex-row">
                <div className="flex-col">
                  <h5>Email:</h5>
                  <h5>GitHub:</h5>
                  <h5>LinkedIn:</h5>
                  <h5>YouTube:</h5>
                  <h5>Instagram:</h5>
                  <h5>Twitter:</h5>
                </div>
                <div className="flex-col">
                  <h5>
                    <a href="mailto:matthewlinplusprogramming@gmail.com">
                      matthewlinplusprogramming@gmail.com
                    </a>
                  </h5>
                  <h5>
                    <a
                      href="https://github.com/matthew-plusprogramming"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/matthew-plusprogramming
                    </a>
                  </h5>
                  <h5>
                    <a
                      href="https://linkedin.com/in/matthewlin-sd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/matthewlin-sd
                    </a>
                  </h5>
                  <h5>
                    <a
                      href="https://www.youtube.com/channel/UCqVIqm9pT-4lH8v2UzkfxIA/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Matthew Lin
                    </a>
                  </h5>
                  <h5>
                    <a
                      href="https://instagram.com/matthew.plusprogramming"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @matthew.plusprogramming
                    </a>
                  </h5>
                  <h5>
                    <a
                      href="https://twitter.com/mat_thewlin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @mat_thewlin
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
