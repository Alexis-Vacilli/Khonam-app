import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
// import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
    return (
        <div className="footer-container">
            <p>2022 khonam all rights reserved</p>
            <p className="icons">
                <AiFillInstagram />
                <AiOutlineTwitter />
            </p>
        </div>
    )
}

export default Footer
