import React from 'react'
import "./about.css"
import Aboutimg from "../../assets/aboutme.png";
import skills from './Skills';


const About = () => {
  return (
    <section className="about container section" id='about'>
        <h2 className="section__title">About Me</h2>

        <div className="about__container grid">
            <div className="image__container"><img src={Aboutimg} alt="" className="about__img" width="200px" /></div>
            <div className="about__data grid">
                <p className="about__description">I'm Frederick Anderson, a dedicated student currently in my 5th semester at Hochschule Darmstadt. My passion lies in the dynamic fields of software engineering and data analytics. With a relentless curiosity and a desire to explore the ever-evolving tech landscape, I'm committed to learning, growing, and pushing the boundaries of what's possible.
As a future software engineer and data analyst, I believe in the power of data-driven solutions and elegant code. I'm on a journey to make meaningful contributions to the world of technology. Join me as I navigate this exciting adventure, one code snippet at a time.
Let's build a smarter, data-driven future together.</p>
<p className="about__description__short">I'm Frederick Anderson, a dedicated student currently in my 5th semester at Hochschule Darmstadt. My passion lies in the dynamic fields of software engineering and data analytics.</p>
            </div>
            <div className="about__skills grid">
                {skills.map((skill)=>{
                    return(
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">
                                    {skill.name}
                                </h3>
                                <span className="skills_number"></span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage" 
                                    style={{
                                        width: `${skill.percentage}%`,
                                        backgroundColor: 'rgb(255, 209, 92)'
                                    }}></span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default About