import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false); // State to track if form is submitted

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
    // For demonstration purposes, I'm just setting the submitted state to true
    setSubmitted(true);
    // Redirect to home page after 3 seconds
    setTimeout(() => {
      window.location.href = '/'; // Redirect to home page
    }, 3000);
  };

  return (
    <div className="home-container1">
      <div className="contact-container">
        {!submitted ? ( // Show form if not submitted
          <>
            <h1>Contact Us</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>

              <button type="submit">Submit</button>
            </form>
          </>
        ) : ( // Show thank you message if submitted
          <div className="thanks-message">
            <h2>Thanks for contacting us!</h2>
            <p>You will be redirected to the home page shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
