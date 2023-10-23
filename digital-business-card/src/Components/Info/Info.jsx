import React from "react";
import { ReactDOM } from "react";

export default function Info() {
    return(
        <div>

            <img className="picture" src="./images/picture.jpg"/>
            <h1 className="info--name">Furkan Fırat</h1>
            <h5 className="info--title">Web Developer</h5>
            <h6 className="info--website">furkan.website</h6>

            <div className="info--buttons">
                <button className="email-button" type="submit"> <img src="./images/email-button.png" /> </button> 
                <a href="https://www.linkedin.com" target="_blank"> <button className="linkedin-button" type="submit"> <img src="./images/linkedin-button.png" /> </button> </a>
            </div>
        </div>
    )
}