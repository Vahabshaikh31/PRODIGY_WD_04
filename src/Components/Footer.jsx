import styles from './Footer.module.css'
import github from '../assets/Github.svg'
import HackerRank from '../assets/HackerRank.svg'
import Linked from '../assets/LinkedIn.svg'
const Footer = () => {
  return (
    <>
      <div className={styles.Footer_main}>
        <div className={styles.footer_left}>
          <h1 className={styles.Footer_tag}>@2024 Abdulvahab Shaikh</h1>
        </div>

        <div className={styles.footer_right}>
          <div className={styles.footer_email}>
            <span>Email</span>
            <span>Svahab33@gmail.com</span>
          </div>

          <div className={styles.footer_link}>
            <span>Follow</span>
            <div className={styles.Footer_l}>
              <a target='vahab' href="https://github.com/Vahabshaikh31">
                <img className={styles.Footer_links} src={github} alt="" />
              </a>

              <a target='vahab' href="https://www.hackerrank.com/profile/svahab33">
                <img className={styles.Footer_links} src={HackerRank} alt="" />
              </a>
              <a target='vahab' href="https://www.linkedin.com/in/abdulvahab-shaikh-aa3464305/">
                <img className={styles.Footer_links} src={Linked} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
