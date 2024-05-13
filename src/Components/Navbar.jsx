import styles from './Navbar.module.css';
// import {Link } from 'react-dom'
const Navbars = () => {
    return (
        <div className={styles.main}>
            
            <div className={styles.left_nav}>
                     <div style={{ width: '30px', height: '30px', backgroundColor: '#c2274b' }}></div><h4 className={styles.heading}>
           
                     Abdulavahab</h4>
                <span className={styles.des}> &frasl;  Mern Developer, <br />   Java developer (Freasher).</span>
            </div>

            <div className={styles.right_nav}>
                <span  className={styles.link}>ABOUT ME</span>
                <span  className={styles.link}>RESUME</span>
                <span  className={styles.link}>PROJECTS</span>
                <span  className={styles.link}>CONTACT</span>
            </div>
        </div>
               
    );
}

export default Navbars;
