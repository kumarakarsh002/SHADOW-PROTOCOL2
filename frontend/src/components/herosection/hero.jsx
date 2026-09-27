import styles from './hero.module.css'
import FuzzyText from '../../../ReactBits/FuzzyText'
import {HeroSectionnumbers} from './HerosectionComponents'

const HeroSection = () => {
  return (
    <>
        <section className={styles.heroSection}>
            <div className={styles.heroSectionadvertisement}>
                <div className={styles.livedot}></div>
                <p>REGISTRATIONS PHASE II OPEN // OCT 24-26, 2026</p>
            </div>
            <div className={styles.heroSectionheader}>
                <h1>BUILD <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover fontSize='60px' >THE UNREAL </FuzzyText><span style={{color: 'cyan'}}> // </span> 48-HOUR GLOBAL INVENTOR SPRINT</h1>
                <p>Join 3,500+ builders, engineers, and designers pushing the frontier of Generative AI, Autonomous Agents, and Decentralized Systems. Compete for $75,000 in unlocked bounties.</p>
            </div>
            <div className={styles.heroSectiontimmer}>
                
                <div className={styles.heroSectiontimmercountdown}>
                    <p>Days</p>
                </div>
                <div className={styles.heroSectiontimmercountdown}>
                    <p>Hours</p>
                </div>
                <div className={styles.heroSectiontimmercountdown}>
                    <p>Min</p>
                </div>
                <div className={styles.heroSectiontimmercountdown}>
                    <p>Sec</p>
                </div>
            </div>

            <div className={styles.heroSectionbuttons}>
                <button className={styles.hackerbtn}>
                <svg class="icon" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                Apply As Student
                </button>
                <button className={styles.hackerbtn} style={{background: '#29282D', color:'#D9F3FF'}}>
                <svg class="icon" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" >
                <circle cx="12" cy="12" r="9"></circle>
                <polygon points="15 9 13 13 9 15 11 11 15 9"></polygon>
                </svg>
                EXPLORE TRACKS & CHALLENGES
                </button>
            </div>

            <div className={styles.heroSectionnumbers}>
                <HeroSectionnumbers number='3500+' details="Verified Students" color="whitesmoke" />
                <HeroSectionnumbers number='15+' details="Colleges & Schools" color="cyan" />
                <HeroSectionnumbers number='1500+' details="Teams" color="white" />
                <HeroSectionnumbers number='₹1Lakh+' details="Prize Pool" color="#C5B4E3" />
                {/* <div className={styles.heroSectionnumberslist}>
                    <h1 style={{color: 'whitesmoke'}}>3500+</h1>
                    <p>Verified Students</p>
                </div>
                 <div className={styles.heroSectionnumberslist}>
                    <h1 style={{color: 'cyan'}}>15+</h1>
                    <p>Colleges & Schools</p>
                </div>
                 <div className={styles.heroSectionnumberslist}>
                    <h1 style={{color: 'white'}}>1500+</h1>
                    <p>Teams</p>
                </div>
                 <div className={styles.heroSectionnumberslist}>
                    <h1 style={{color: '#C5B4E3'}}>₹1Lakh+</h1>
                    <p>Prize Pool</p>
                </div> */}
            </div>

        </section>
    </>
  )
}

export default HeroSection
