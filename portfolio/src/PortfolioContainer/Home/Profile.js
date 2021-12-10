import React from 'react';
import './Profile.css';


export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='#'>
                            <i className='fa fa-facebook-square'> </i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-google-plus-square'> </i>
                        </a>
                        <a href='https://www.instagram.com/patriciadecamargo_/'>
                            <i className='fa fa-instagram'> </i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-youtube-square'> </i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-linkedin'> </i>
                        </a>
                        </div>
                        
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlithed-text'> Patricia </span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'> 
                        {" "}
                        <h1>
                            Aspiring Web Developer
                           </h1>
                           <span className='profile-role-tagline'> 
                            Building applications with front and back.
                           </span>
                        </span>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {" "}
                            Hire Me {" "}
                        </button>
                        <a href='pati.pdf' download='Pati.pdf'>
                            <button className='btn highlighted-btn'> Get Resume </button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
