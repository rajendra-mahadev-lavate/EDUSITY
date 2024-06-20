import React from 'react'
import "./Contact.css";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "7269bc89-a248-4c43-9096-a0e714c8b534");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    return (
        <>
            <div className="container">
                <div className="contact" id='contact'>
                    <div className="contact-col">
                        <h3>Send us a Message <img src="/assests/msg-icon.png" alt="" /></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur atque ratione impedit magnam, obcaecati animi quod nam repellat cupiditate mollitia quae consectetur corporis velit vero eum id error totam! Doloribus!</p>
                        <ul>
                            <li><img src="/assests/mail-icon.png" alt="" />rajendraml789@gmail.com</li>
                            <li> <img src="/assests/phone-icon.png" alt="" />7083709169</li>
                            <li> <img src="/assests/location-icon.png" alt="" />Pune, Maharashtra</li>
                        </ul>
                    </div>

                    <div className="contact-col">
                        <form action="" onSubmit={onSubmit}>
                            <label htmlFor="">Your Name:</label>
                            <input type="text" name='name' placeholder='Enter Your Name ' required />

                            <label htmlFor="">Phone Number:</label>
                            <input type="tel" name='phone' placeholder='Enter Your Mobile Number ' required />

                            <label htmlFor="">Write Your Message here:</label>
                            <textarea name='message' rows={6} placeholder='Enter Your Message ' required />

                            <button type='submit' className='btn dark-btn'>Submit Now <img src="/assests/white-arrow.png" alt="" /></button>
                        </form>

                        <span>{result}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
