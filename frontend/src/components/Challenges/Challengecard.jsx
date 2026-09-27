import React from 'react'
import styles from './Challengecard.module.css';


const Challengecard = () => {
    return (
        <div className={styles.challengescard}>
            <div className={styles.challengescardupper}>
                <img className={styles.challengescardupperlogo} src='' alt='Nothing' />
                <div className={styles.challengescardupperbounty}>
                    <p>TRACK BOUNTY</p>
                    <h1>₹25,000</h1>
                </div>

            </div>
            <div className={styles.challengescardlower}>
                <p>POWERED BY OPENAI & ANTHROPIC</p>
                <h2>Autonomous AI & LLM Systems</h2>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magnam atque explicabo totam deleniti culpa distinctio perferendis molestias, nesciunt debitis at inventore quidem nihil sapiente esse error? Pariatur consequatur ea deleniti in mollitia, quas esse?</h4>

            </div>
            <div className={styles.challengescardlowerparagraph}>
                <p>1,240 Hacker Candidate</p>
            </div>
        </div>
    )
}

export default Challengecard