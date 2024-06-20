import React from 'react'
import "./About.css";
const About = ({setPlayState}) => {
    return (
        <>
            <div className="about" id='about'>
                <div className="about-left">
                    <img src="/assests/about.png" alt="" className='about-img' />
                    <img src="/assests/play-icon.png" alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
                </div>
                <div className="about-right">
                    <h3>About University</h3>
                    <h2>Nurturing Tommorrows Leaders Today</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eum at porro quas distinctio aliquid, doloremque quisquam odio expedita repellat ea repellendus numquam nostrum quo autem. Odio a officiis aliquam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eum at porro quas distinctio aliquid, doloremque quisquam odio expedita repellat ea repellendus numquam nostrum quo autem. Odio a officiis aliquam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eum at porro quas distinctio aliquid, doloremque quisquam odio expedita repellat ea repellendus numquam nostrum quo autem. Odio a officiis aliquam.</p>
                </div>
            </div>
        </>
    )
}

export default About
