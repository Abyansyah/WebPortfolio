import React, { useEffect, useState } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../Css/Kontak.css';
import axios from 'axios';

function Kontak() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: 'ease' });
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data={
      Name:name,
      Email:email,
      Message:message
    }
    axios.post('https://sheet.best/api/sheets/b097a330-a78a-46d4-b54a-669f920a9f5d', data).then((res)=>{
      setName('');
      setEmail('');
      setMessage('');
    })
  };
  return (
    <>
      <section className="contact" id="contact">
        <div data-aos="zoom-in" className="contact-tittle">
          <h2>
            {' '}
            Contact <span>Me</span>
          </h2>
          <p>Contact me to learn more about me.</p>
          <div className="contact-line"></div>
        </div>
        <div className="contact-container">
          <div className="contact-row">
            <div data-aos="fade-right" className="contact-column">
              <div className="contact-widget">
                <div className="contact-widget-item">
                  <div className="icon">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="contact-text">
                    <h5>Address</h5>
                    <p>Desa Ngasem, Kecamatan Gurah, Kabupaten Kediri</p>
                  </div>
                </div>
                <div className="contact-widget-item">
                  <div className="icon">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h5>Contact Me</h5>
                    <p>0851-5609-3164</p>
                  </div>
                </div>
                <div className="contact-widget-item">
                  <div className="icon">
                    <i class="fa-regular fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h5>Mail</h5>
                    <p>ahmadaby66@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="contact-column">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <input type="text" name="user_name" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} required />
                  <input type="email" name="user_email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                  <textarea placeholder="Comment" name="message" onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>
                  <button type="submit" className="site-btn">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Kontak;
