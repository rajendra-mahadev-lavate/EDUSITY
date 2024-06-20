import React from 'react'
import "./Hero.css";

const Hero = () => {


    const moveBy = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }
    return (
        <>
            <div className="hero container" id='hero'>
                <div className="hero-text">
                    <h1>We Ensure better education for a better world</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum debitis nulla dolore ex, saepe voluptatibus, officiis quia maxime nisi facilis ducimus natus vitae veniam veritatis rem quam omnis facere dolorum.</p>
                    <button className='btn'>Explore More <img src="/assests/dark-arrow.png" alt="" /></button>
                </div>
                <div className="upper" >
                    <img src="./assests/top-arrow.jpg" alt="" onClick={moveBy}/>
                </div>
            </div>
        </>
    )
}

export default Hero
