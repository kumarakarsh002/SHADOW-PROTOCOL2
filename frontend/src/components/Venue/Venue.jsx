import styles from './Venue.module.css';
import address from '../../../data/main/venue.json'


const Details = ({title, label}) => {
    return(
        <div className={styles.details}>
            <h3>{title}</h3>
            <p>{label}</p>
        </div>
    )
}

const Line = () => {
    return(
        <div className={styles.line}>

        </div>
    )
}


const Venue = () => {
  return (
    <div className={styles.venuesection}>
        <div className={styles.venue}>
            <div className={styles.venueleft}>
                <p>HIGH PERFORMANCE LABORATORY</p>
                <h1>{address[0].heading}</h1>
                <h3>{address[0].paragraph}</h3>
                <div className={styles.venueleftbottom}>
                    <Details title={address[0].date} label="date" />
                    <Line />
                    <Details title={address[0].Timming} label="timming"/>
                    <Line />
                    <Details title={address[0].Address} label="address" />
                </div>
            </div>
            <div className={styles.venueright}>
                <img src={address[0].image} alt='School Image' />
                <p>Real Time Telemetry: Node Cluster Active</p>
            </div>
        </div>
    </div>
  )
}

export default Venue