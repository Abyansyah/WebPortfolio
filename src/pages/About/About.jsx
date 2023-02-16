import React, { useEffect } from 'react';
import Aos from 'aos';
import Gambar from '../../Asset/foto.png';
import '../../Css/About.css';
import Button from '../../Components/Button';
import "aos/dist/aos.css"

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: 'ease' });
  });
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading" data-aos='fade-down'>About me</h1>
        <div className="about-row">
          <div data-aos="fade-right" className="about-column">
            <div className="about-pic">
              <img src={Gambar} alt="Person" />
            </div>
          </div>
          <div data-aos="fade-left" className="about-column">
            <div className="about-text">
              <div className="about-tittle">
                <h2>
                  Hi, My Name Is <span> Ahmad Abyansyah </span>
                </h2>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus officia natus adipisci debitis deleniti est odio, distinctio fugiat esse quaerat excepturi aut deserunt ducimus corrupti veritatis blanditiis praesentium labore
                nobis fugit non tenetur fuga repellat. Delectus labore id quos magnam.
              </p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi magnam totam voluptates eum? Doloribus, labore laboriosam assumenda natus reprehenderit fuga</p>

              <Button name="Click Me" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
