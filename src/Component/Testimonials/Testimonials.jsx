import React, { useRef } from 'react'
import "./Testimonials.css"

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx>-50){
            tx-=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackword = () => {
        if(tx<0){
            tx+=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    return (
        <>
            <div className="container">
                <div className="testimonials" id='test'>
                    <img src="/assests/next-icon.png" alt="" className='next-btn' onClick={slideForward} />
                    <img src="/assests/back-icon.png" alt="" className='back-btn' onClick={slideBackword} />
                    <div className="slider">
                        <ul ref={slider}>
                            <li>
                                <div className="slide">
                                    <div className="user-info">
                                        <img src="/assests/user-1.png" alt="" />
                                        <div>
                                            <h3>William Jackson 1</h3>
                                            <span>Edusity, USA</span>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore incidunt excepturi dolorum, veritatis illo, ipsum modi fuga fugit quas iure odit at magnam sapiente repudiandae, mollitia assumenda accusamus sunt eaque vitae! Rem iusto cupiditate excepturi accusantium amet, repellat ut.</p>
                                </div>
                            </li>
                            <li>
                                <div className="slide">
                                    <div className="user-info">
                                        <img src="/assests/user-2.png" alt="" />
                                        <div>
                                            <h3>William Jackson 2</h3>
                                            <span>Edusity, USA</span>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore incidunt excepturi dolorum, veritatis illo, ipsum modi fuga fugit quas iure odit at magnam sapiente repudiandae, mollitia assumenda accusamus sunt eaque vitae! Rem iusto cupiditate excepturi accusantium amet, repellat ut.</p>
                                </div>
                            </li>
                            <li>
                                <div className="slide">
                                    <div className="user-info">
                                        <img src="/assests/user-3.png" alt="" />
                                        <div>
                                            <h3>William Jackson 3</h3>
                                            <span>Edusity, USA</span>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore incidunt excepturi dolorum, veritatis illo, ipsum modi fuga fugit quas iure odit at magnam sapiente repudiandae, mollitia assumenda accusamus sunt eaque vitae! Rem iusto cupiditate excepturi accusantium amet, repellat ut.</p>
                                </div>
                            </li>
                            <li>
                                <div className="slide">
                                    <div className="user-info">
                                        <img src="/assests/user-4.png" alt="" />
                                        <div>
                                            <h3>William Jackson 4</h3>
                                            <span>Edusity, USA</span>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore incidunt excepturi dolorum, veritatis illo, ipsum modi fuga fugit quas iure odit at magnam sapiente repudiandae, mollitia assumenda accusamus sunt eaque vitae! Rem iusto cupiditate excepturi accusantium amet, repellat ut.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
