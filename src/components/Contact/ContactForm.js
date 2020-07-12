import React, {useContext, useState} from 'react';

import {MaterializeCssContext} from '../../contexts/MaterializeCssContext';

const ContactForm = () => {
  const materializeContext = useContext(MaterializeCssContext);
  materializeContext.materializeReinit();

  const defaultFormData = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  };

  const [statusText, setStatusText] = useState('');
  // Form data
  const [formData, setFormData] = useState(defaultFormData);

  // Handle form events
  const handleChange = (event) => {
    const {id, value} = event.target;
    setFormData({...formData, [id]: value});
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://services.matthewlin.dev/portfolio-api/contact', {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.status !== 200) {
        setStatusText(
          'The information you gave me is incomplete! Please make sure all required information is provided.',
        );
      } else {
        setStatusText(
          'Thanks for getting in contact! I will reply to any inquiries as soon as possible.',
        );
      }
    });

    setFormData(defaultFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex-col">
        <div className="flex-row center">
          <h4 className="no-margin">Contact Form</h4>
        </div>
        <div className="flex-row center bottom-margin">
          <h6>
            <i>I will reply to any inquiries as soon as possible.</i>
          </h6>
        </div>

        <div className="flex-row">
          <div className="input-field flex-1">
            <input
              id="name"
              type="text"
              value={formData.name}
              className="validate"
              onChange={handleChange}
            />
            <label htmlFor="name">
              Name<sup>*</sup>
            </label>
          </div>
          <div className="input-field flex-1">
            <input
              id="phone"
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              value={formData.phone}
              className="validate"
              onChange={handleChange}
            />
            <label htmlFor="phone">Phone#</label>
          </div>
        </div>
        <div className="input-field flex-1">
          <input
            id="email"
            type="email"
            value={formData.email}
            className="validate"
            onChange={handleChange}
          />
          <label htmlFor="email">
            Email<sup>*</sup>
          </label>
        </div>
        <div className="input-field flex-1">
          <input
            id="subject"
            type="text"
            value={formData.subject}
            className="validate"
            onChange={handleChange}
          />
          <label htmlFor="subject">
            Subject<sup>*</sup>
          </label>
        </div>
        <div className="input-field flex-1">
          <textarea
            id="message"
            value={formData.message}
            className="materialize-textarea"
            onChange={handleChange}
          />
          <label htmlFor="message">
            Message<sup>*</sup>
          </label>
        </div>
        <div className="flex-row center bottom-margin">
          <button className="z-depth-3 waves-effect waves-light">Submit</button>
        </div>
        <div className="flex-row center bottom-margin">*Required</div>
        <div className="flex-row center flex-container">
          <h6>{statusText}</h6>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
