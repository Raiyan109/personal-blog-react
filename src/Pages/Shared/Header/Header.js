import React from 'react';
import styles from '../Header/Header.module.css'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react';
const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div onClick={() => setOpen(!open)} className={styles.hamburger}>
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

            </div>
        </div>
    );
};

export default Header;