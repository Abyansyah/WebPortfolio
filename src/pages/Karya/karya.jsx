import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../Css/Karya.css';
import Menu from './Data';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((cureElem) => {
      return cureElem.category === categItem;
    });
    setItems(updatedItems);
  };

  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: 'ease' });
  });

  return (
    <Fragment>
      <section className="portfolio" id="portfolio">
        <div className="port-tittle" data-aos="fade-down">
          <h2>
            my <span>works</span>
          </h2>
          <p>Most of the projects I work on.</p>
          <div className="port-line"></div>
        </div>

        <div className="nav" data-aos="fade-down">
          <ul className="nav-list">
            <li onClick={() => setItems(Menu)}>
              <Link className="img-filter active">All</Link>
            </li>
            <li onClick={() => filterItem('Designing')}>
              <Link className="img-filter">Designing</Link>
            </li>
            <li onClick={() => filterItem('frontend')}>
              <Link className="img-filter">frontend</Link>
            </li>
            <li onClick={() => filterItem('Backend')}>
              <Link className="img-filter">Backend</Link>
            </li>
          </ul>
        </div>

        <div className="port-row">
          {items.map((elem) => {
            return (
              <div className="port-col" key={elem.id} data-aos="zoom-in">
                <div class="project-item">
                  <Link className="zoom1" to="">
                    <img alt="" src={elem.image} />
                    <div class="overlay">
                      <div class="overlay-inner">
                        <h4>{elem.heading}</h4>
                        {/* <Button name='see' link={elem.link}/> */}
                        <p>{elem.paragrapgh}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Portfolio;
