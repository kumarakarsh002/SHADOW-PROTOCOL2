import styles from './nav.module.css';


const Navigation = () => {
  return (
    <>
        <section className={styles.navigationsection}>
              <div className={styles.navigationsectionlogo}>
                <img src="/image.png" alt="Icon" className={styles.navlogo}/>
              </div>
              <div className={styles.navigationsectionnav}>
                <a href='#'>Home</a>
                <a href='#'>Student Portal</a>
                <a href='#'>Events</a>
                <a href='#'>Registration</a>
                <a href='#'>Rules & FAQs</a>
                <a href='#'>Contact Us</a>

              </div>
              <div className={styles.navigationsectiondashboard}>
                <button>Login</button>

              </div>
        </section>
    </>
  )
}

export default Navigation