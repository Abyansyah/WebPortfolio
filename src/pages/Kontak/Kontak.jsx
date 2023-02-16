import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../Css/Kontak.css';
function Kontak() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: 'ease' });
  });
  return (
    <>
      <section className="contact" id="contact">
        <div data-aos="zoom-in" className="contact-tittle">
          <h2>
            {' '}
            Contact <span>Me</span>
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, temporibus consequuntur dicta ullam illo facere.</p>
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
                    <h5>Contact Us</h5>
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
                <form action="#">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <textarea placeholder="Comment"></textarea>
                  <button type="submit" className="site-btn">
                    {' '}
                    Send Message{' '}
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
