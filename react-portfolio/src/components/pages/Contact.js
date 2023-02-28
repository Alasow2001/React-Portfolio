import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder='Your Name'/>
          </div>

          <div>
            <label>Email</label>
            <input type='email' placeholder='Your Email'/>
          </div>

          <div>
            <label>Message</label>
            <textarea placeholder='Your Message' />
          </div>

          <div>
            <button>Submit Form</button>
          </div>
        </form>
      </p>
    </div>
  );
}
