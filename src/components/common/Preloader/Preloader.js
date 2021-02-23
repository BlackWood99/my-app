import styles from './Preloader.module.css'

let Preloader = () => {
    return (
        <div className={styles.block}>
            <div className={styles.preloader}>
                <div className={styles.spinner}></div>
            </div>
        </div>
    )
}

export default Preloader