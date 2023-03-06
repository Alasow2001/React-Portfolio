import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
        <form className='form'>
          <div>
            <label>Name:</label>
            <input type="text" placeholder='Your Name' className='name'/>
          </div>

          <div>
            <label>Email:</label>
            <input type='email' placeholder='Your Email' className='email'/>
          </div>

          <div>
            <label className='message-title'>Message:</label>
            <textarea placeholder='Your Message' className='message'/>
          </div>

          <div>
            <button>Submit Form</button>
          </div>
        </form>
    </div>
  );
}
