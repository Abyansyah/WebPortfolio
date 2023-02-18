import React, { useEffect } from 'react';
import Aos from 'aos';
import Gambar from '../../Asset/foto.png';
import '../../Css/About.css';
import Button from '../../Components/Button';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: 'ease' });
  });
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading" data-aos="fade-down">
          About me
        </h1>
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
                Hello! I am a Full Stack Web Developer with a passion for creating dynamic and engaging web applications. I am committed to staying up-to-date with the latest technologies and tools to deliver the best solutions to my
                clients. As a Full Stack Web Developer, I am proficient in both front-end and back-end web development. I have experience working with popular programming languages such as JavaScript, Java, and PHP. I have also worked with
                popular databases such as MySQL, MongoDB, and .
              </p>
              <p>
                In my free time, I enjoy exploring new technologies, contributing to open-source projects, and participating in online programming communities. I am always excited to work with like-minded individuals and create amazing web
                applications together. If you have any questions or would like to collaborate on a project, feel free to reach out to me. I look forward to hearing from you!
              </p>

              <Button name="Hire me" class="fa-regular fa-envelope" link="/kontak" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
