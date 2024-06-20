import React from 'react'
import "./Title.css"
const Title = ({subTitle,title}) => {
    return (
        <>
            <div className="container">
                <div className="title">
                    <p>{subTitle}</p>
                    <h2>{title}</h2>
                </div>
            </div>
        </>
    )
}

export default Title
