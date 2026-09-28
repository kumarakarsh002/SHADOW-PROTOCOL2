import React from 'react'
import styles from './Challengecard.module.css';
import { FaLeaf } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { MdOutlineHub } from "react-icons/md";
import { PiCodesandboxLogo } from "react-icons/pi";

const iconMap = {
    FaLeaf: FaLeaf,
    LuBrainCircuit: LuBrainCircuit,
    MdOutlineHub: MdOutlineHub,
    PiCodesandboxLogo: PiCodesandboxLogo
    };


const Challengecard = ({icon, amount, poweredby, heading, paragraph, studentno, color}) => {
    const Icon = iconMap[icon];
    
    
    return (
        <div className={styles.challengescard}>
            <div className={styles.challengescardupper}>
                <div className={styles.challengescardupperlogo}>
                    {Icon && <Icon style={{color: color}}/>}
                </div>
                <div className={styles.challengescardupperbounty}>
                    <p>PARTICIPANT FEES</p>
                    <h1 style={{color: color}}>₹{amount}</h1>
                </div>

            </div>
            <div className={styles.challengescardlower}>
                <p style={{color: color}}>{poweredby}</p>
                <h2>{heading}</h2>
                <h4>{paragraph}</h4>

            </div>
            <div className={styles.challengescardlowerparagraph}>
                <p>{studentno} Student Candidate</p>
            </div>
        </div>
    )
}

export default Challengecard