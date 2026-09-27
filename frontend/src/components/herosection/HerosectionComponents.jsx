import styles from './Herosectionnumbers.module.css'



export const HeroSectionnumbers = (numbers) => {
    return (
        <>
            <div className={styles.heroSectionnumberslist}>
                <h1 style={{ color: numbers.color }}>{numbers.number}</h1>
                <p>{numbers.details}</p>
            </div>
        </>
    )
}




