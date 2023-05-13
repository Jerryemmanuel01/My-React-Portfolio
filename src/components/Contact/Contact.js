import React from 'react'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookMessenger,
  
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Contact(){
  return (
    <section className="contact--page">
      <h3 className="contact--txt head--txt">Contact Me</h3>
      <div className="contact--main">
        <div className="contact--card--main">
          <div className="contact--card">
            <FontAwesomeIcon icon={faEnvelope} className="contact--icon" />
            <p className="card--txt">Jerryemmanuelolisa@gmail.com</p>
            <a href="mailto:jerryemmanuelolisa@gmail.com" target="_blank" className='contact--link'>
              Send a message
            </a>
          </div>

          <div className="contact--card">
            <FontAwesomeIcon
              icon={faFacebookMessenger}
              className="contact--icon"
            />
            <p className="card--txt">Jerryemmanuel Dominic</p>
            <a href="https://m.me/jerryemmanuel.dominic.58" target="_blank">
              Send a message
            </a>
          </div>

          <div className="contact--card">
            <FontAwesomeIcon icon={faWhatsapp} className="contact--icon" />
            <p className="card--txt">+234-810-2363-720</p>
            <a
              href="https://api.whatsapp.com/send?phone=+2348102363720"
              target="_blank"
            >
              Send a message
            </a>
          </div>
        </div>

        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required /><br />
          <input type="email" name="email" placeholder="Your Email" required /><br />
          <textarea name="message" rows="7" placeholder='Your message' required/><br />
          <button type='submit' className='submit--btn cv--div'>Send message</button>
        </form>
      </div>
    </section>
  );
}

