import React from 'react'
import styles from '../Challenges/Challenges.module.css'
import Challengecard from './Challengecard'


const Challenges = () => {
  return (
    <div className={styles.Challengessection}>
        <div className={styles.header}>
            <div className={styles.subheader1}>
                <p>CHALLENGES MATRICES</p>
                <h1>TARGET TRACKS & BOUNTIES</h1>
            </div>
            <div className={styles.subheader2}>
                <p>Select a track or combine cross - discipline vectors. Submissions judges on architectural Ingenulty, polish, and real world utility.</p>
            </div>
        </div>
        <div className={styles.Challengesfooter}>
            <Challengecard />
            <Challengecard />
            <Challengecard />
            <Challengecard />
        </div>
    </div>
  )
}

export default Challenges