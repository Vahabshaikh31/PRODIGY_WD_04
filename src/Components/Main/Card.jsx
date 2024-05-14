import style from './Card.module.css'
import Profile from '../../assets/My.jpg'
import github from '../../assets/Github.svg'
import HackerRank from '../../assets/HackerRank.svg'
import Linked from '../../assets/LinkedIn.svg'

const Card = () => {
    return (
        <div className={style.card_main}>
            <div className={style.img_div}>
                <img src={Profile} alt="" className={style.img} />
            </div>
            <span className={style.name}>
                <span className={style.first}>Abdulvahab</span>
                <span className={style.last}>shaikh</span>
                <span className={style.line}></span>
            </span>
            <div className={style.des}>
                Mern stack Developer java Developer
            </div>
            <div className={style.social_div}>

                <a target='vahab' href="https://github.com/Vahabshaikh31">
                    <img src={github} alt="" />
                </a>

                <a target='vahab' href="https://www.hackerrank.com/profile/svahab33">
                    <img className={style.link_img} src={HackerRank} alt="" />
                </a>

                <a target='vahab' href="https://www.linkedin.com/in/abdulvahab-shaikh-aa3464305/">
                    <img src={Linked} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Card
