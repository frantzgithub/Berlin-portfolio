import whats from "../../assets/whatsap-icon.png" 
import linkedin from "../../assets/linkedin-icon.png"
import github from "../../assets/git-icon.png"
import styles from "./styles.module.css"
//footerr
export const Footer = ()=>{
    return (
        <footer id="footer" className={styles.footer}>
            <div className="container">
                <div>
                    <h2 className="title2">Contact</h2>
                    <div className={styles.imgs}>
                        <img src={whats} alt="whatsapp" onClick={()=>location.replace('https://wa.me/8295668418')} />
                        <img src={linkedin} alt="linkedin" onClick={()=>location.replace('https://www.linkedin.com/in/berlin-rosalva-0855182a3/')} />
                        <img src={github} alt="github" onClick={()=>location.replace('https://github.com/frantzgithub')}/>
                    </div>
                </div>
                <span className='paragraph'>All copyrights reserved - Berlin</span>
            </div>
        </footer>
    )
}