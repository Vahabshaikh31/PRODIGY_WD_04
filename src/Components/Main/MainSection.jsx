import React from 'react';
import Navbar from '../Navbar';
import Card from './Card';
import style from './Main.module.css';

const MainSection = () => {
  return (
    <>
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
              <button className={style.Resume_btn}>Resume</button>
              <button className={style.Project_btn}>Project</button>
            </div>
            <div className={style.des}>
              As a MERN stack developer, I have the skills to create full-stack web applications using MongoDB, Express, React, and Node.js. My expertise in these technologies allows me to build dynamic and responsive user interfaces, handle server-side logic, and manage databases with ease.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSection;
