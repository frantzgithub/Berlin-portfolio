import { username } from "../../../data/user"
import bannerImg from "../../../assets/banner-img.jpg";
import styles from "./style.module.css"

export const BannerSection = ()=>{
    return (
        <section className={styles.banner}>
            <div className="container">
                <section className={styles.sectionText}>
                    <span className="username">{username}</span>
					<h1 className="title1">Welcome to my portfolio</h1>
					<p className="paragraph">check my LinkedIn</p>
					<button className="buttonStyle" onClick={()=>location.replace('https://www.linkedin.com/in/berlin-rosalva-0855182a3/')} >know more</button>
                </section>
                <img src={bannerImg}/>
            </div>
        </section>
    )
}