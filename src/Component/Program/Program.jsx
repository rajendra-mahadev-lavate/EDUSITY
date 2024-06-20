import React from 'react'
import "./Program.css";

const Program = () => {
    return (
        <>
            <div className="container">
                <div className="programs" id='program'>
                    <div className="program">
                        <img src="/assests/program-1.png" alt="" />
                        <div className="caption">
                            <img src="/assests/program-icon-1.png" alt="" />
                            <p>Graduation Degree</p>
                        </div>
                    </div>
                    <div className="program">
                        <img src="/assests/program-2.png" alt="" />
                        <div className="caption">
                            <img src="/assests/program-icon-2.png" alt="" />
                            <p>Master Degree</p>
                        </div>
                    </div>
                    <div className="program">
                        <img src="/assests/program-3.png" alt="" />
                        <div className="caption">
                            <img src="/assests/program-icon-3.png" alt="" />
                            <p>Post Graduation Degree</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Program
