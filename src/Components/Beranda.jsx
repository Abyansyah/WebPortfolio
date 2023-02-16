import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Beranda.css';
import Button from './Button';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Beranda() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: 'ease' });
  });
  return (
    <>
      <section className="home">
        <div className="home-content" data-aos="fade-right">
          <h1>
            I Am Ahmad <br /> UI/UX Designer <br /> & Developer
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est autem laborum <br /> blanditiis sunt impedit neque reprehenderit porro. Amet, provident iste?
          </p>
        </div>

        <div class="social" data-aos="fade-right">
          <Link>
            <i class="fa fa-twitter"></i>
          </Link>
          <Link>
            <i class="fa fa-facebook"></i>
          </Link>
          <Link>
            <i class="fa fa-linkedin"></i>
          </Link>
          <Link>
            <i class="fa fa-instagram"></i>
          </Link>
        </div>

        <Button name="click me" class="fa-regular fa-envelope" aos="fade-right" />
      </section>
    </>
  );
}

export default Beranda;
