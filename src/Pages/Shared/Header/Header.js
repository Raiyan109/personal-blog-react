import React from 'react';
import styles from '../Header/Header.module.css'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



const Header = () => {
    // const [open, setOpen] = useState(false)
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h1>Newspaper.</h1>
                </div>
                <div className={styles.middleRoutes}>
                    <Link className={styles.link} to='/home'>Home Page</Link>
                    <Link className={styles.link} to='/simplePost'>Simple Post</Link>
                    <Link className={styles.link} to='/about'>About us</Link>
                    <Link className={styles.link} to='/blog'>Blog</Link>
                </div>
                <div className={styles.socialRoutes}>
                    <FontAwesomeIcon icon={faFacebookF} className={styles.fa} />
                    <FontAwesomeIcon icon={faGithub} className={styles.fa} />
                    <FontAwesomeIcon icon={faLinkedinIn} className={styles.fa} />
                </div>

            </div>





























            {/* <div onClick={() => setOpen(!open)} className={styles.hamburger}>
                {open ? <XIcon></XIcon> : <MenuIcon />}
            </div>
            <div className={`styles.header ${open ? 'top-6' : 'top-[-120px]'}`}>
                <p>Home</p>
                <p>Pricing</p>
                <p>Locations</p>
                <p>Proposals</p>
                <p>Elopements </p>
                <p>Meet the Teem</p>
                <p>Blog</p>

            </div> */}
        </div>
    );
};

export default Header;