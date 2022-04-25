import React from 'react';
import styles from './Head.module.css';
import { Link } from 'react-router-dom';

export default function Head(props) {

    return (
    <div>
        <div className = {styles.box}>
            <Link to = "/">
                올리브영 세일기록
            </Link>
        </div>
    </div>
    );
}