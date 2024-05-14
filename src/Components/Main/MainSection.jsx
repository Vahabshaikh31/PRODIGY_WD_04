import React from 'react';
import Navbar from '../Navbar';
import Card from './Card';
import style from './Main.module.css';
import waveVideo from '../../assets/back.mp4';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const MainSection = () => {
  return (
    <div className="relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src={waveVideo} type="video/mp4" />
      </video>
      <div className="relative z-10">
        <Navbar />
        <div className={style.hero_main}>
          <div className={style.back}></div>
          <div className={style.Card}>
            <Card />
          </div>
          <div className={style.Left_s}>
            <div className={style.Text}>
              <h1 className={style.h1}>Hello</h1>
              <h3 className={style.h3}>Here's who I am & what I do</h3>
              <div className={style.btns}>
                <button className={style.Resume_btn}><Link to="/Resume" className={style.link}>RESUME</Link></button>
                <button className={style.Project_btn}><Link to="/Projects" className={style.link}>PROJECT</Link></button>
              </div>
              <div className={style.des}>
                As a MERN stack developer, I have the skills to create full-stack web applications using MongoDB, Express, React, and Node.js. My expertise in these technologies allows me to build dynamic and responsive user interfaces, handle server-side logic, and manage databases with ease.
              </div>
            </div>
          </div>
        </div>
        <div className={style.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
