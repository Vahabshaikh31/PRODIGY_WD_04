import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.main}>
            <div className={styles.left_nav}>
                <div style={{ width: '30px', height: '30px', backgroundColor: '#c2274b' }}></div>
                <h4 className={styles.heading}>Abdulavahab</h4>
                <span className={styles.des}>&frasl; Mern Developer, <br /> Java developer (Fresher).</span>
            </div>
            <div className={styles.right_nav}>
                <NavLink exact to="/" activeClassName={styles.active} className={`${styles.link} ${styles.menu__link}`}>ABOUT ME</NavLink>
                <NavLink to="/Resume" activeClassName={styles.active} className={`${styles.link} ${styles.menu__link}`}>RESUME</NavLink>
                <NavLink to="/Projects" activeClassName={styles.active} className={`${styles.link} ${styles.menu__link}`}>PROJECTS</NavLink>
                <NavLink to="/Contact" activeClassName={styles.active} className={`${styles.link} ${styles.menu__link}`}>CONTACT</NavLink>
            </div>
        </div>
    );
}

export default Navbar;
