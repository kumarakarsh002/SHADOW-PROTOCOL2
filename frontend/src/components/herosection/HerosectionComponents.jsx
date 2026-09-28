import styles from './Herosectionnumbers.module.css'



export const HeroSectionnumbers = ({number, details, color}) => {
    return (
        <>
            <div className={styles.heroSectionnumberslist}>
                <h1 style={{ color: color }}>{number}</h1>
                <p>{details}</p>
            </div>
        </>
    )
}




