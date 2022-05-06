import React from 'react'

export default function Info() {
    return (
        <div className='container--info'>
            <img src='./images/Avatar.png' className='info--image' />
            <h1>Laura Smith</h1>
            <h2>Frontend Developer</h2>
            <h3>laurasmith.website</h3>
            <button className='btn-email'><img src='./images/Email-Icon.svg' className='btn--email' />Email</button>
            <button className='btn-linkedin'><img src='./images/linkedin.svg' className='btn--linkedin' />Linkedin</button>
        </div>
    )
}