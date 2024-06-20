import React from 'react'
import "./Campus.css"

const Campus = () => {
    return (
        <>
            <div className="campus" id='campus'>
                <div className="gallery">
                    <img src="assests/gallery-1.png" alt="" />
                    <img src="assests/gallery-2.png" alt="" />
                    <img src="assests/gallery-3.png" alt="" />
                    <img src="assests/gallery-4.png" alt="" />
                </div>

                <button className='btn dark-btn'>see more here <img src="/assests/white-arrow.png" alt="" /></button>
            </div>
        </>
    )
}

export default Campus
