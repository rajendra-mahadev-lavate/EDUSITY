import React, { useRef } from 'react'
import "./Vedio.css"

const Vedio = ({ playState, setPlayState }) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
        setPlayState(false)
    }
}
return (
    <>
        <div className="container">
            <div className={`vedio-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
                <video src='/assests/vedio.mp4' autoPlay muted controls></video>
            </div>
        </div >
    </>
)
}

export default Vedio
