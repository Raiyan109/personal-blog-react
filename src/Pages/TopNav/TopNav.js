import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TopNav.module.css'


const TopNav = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h2>Magazine and newspaper with news arround the world</h2>
            </div>
            <div className={styles.contact}>
                <Link className={styles.link} to='/contact'>Contact</Link>
                <Link className={styles.link} to='/privatePolicy'>Private Policy</Link>
            </div>
        </div>
    );
};

export default TopNav;