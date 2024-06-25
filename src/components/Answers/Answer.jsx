import React, {useState} from "react";
import right from '../../images/right.png'
import styles from '../../styles/Answers.module.css';

function Answer (props) {

    const [answer, setAnswer] = React.useState(false);
    return (
        <div className={styles.answer}
        onClick={() => setAnswer(!answer)}>
            <div className={styles.logo}>
        <h1>{props.title}</h1>
            <img src={right}/>
            </div>
            <div className={styles.popup}>
             {
                answer && (    
                        <li
                        className={answer === answer ? 'active'  : ''}
                        >{props.desc}</li>
                )
             }
            </div>  
        </div>
    )
}

export default Answer;