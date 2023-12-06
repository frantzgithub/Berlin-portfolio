import style from "./style.module.css"

export const AboutMe = ()=> {
    return (
        <section id='about' className={style.aboutMe}>
            <div className="container">
                <h2 className="title2">About me</h2>
                <p className="paragraph">I am Berlin, currently I am a Front-end Developer but my goals is to become a Full-stack Developer. I have knowledge in technologies such as: Html, Css, Javascript, Git, React, Bootstrap and Python. I am focused, dedicated and I like to learn new things from people who have more experience than me for improving my skills.</p>
            </div>
        </section>
    )
}