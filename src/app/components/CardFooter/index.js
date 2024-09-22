
"use client"
import React, { useState } from 'react'
import styles from './cardFooter.module.css'
const CardFooter = ({ id = 0 }) => { 
    const [like, setLike] = useState(id);

    const increase = () => {
        setLike(like + 1);
    }

    return (
        <div className={styles.cardFooter}>
            <p>{like}</p>
            <button onClick={increase}> &#9829; </button>
        </div>
    );
}

export default CardFooter;