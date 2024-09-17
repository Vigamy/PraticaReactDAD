import styles from './RedPremium.module.css'

function RedPremium(props) {
    return(
        <div className={styles.container}>
            <h1>FREE</h1>
            <ul className={styles.lista}>
                <li>PNG templates</li>
                <li>Figma responsive
                components</li>
                <li>Constant updates</li>
                <li>Custom templates</li>
            </ul>
            <h1>$0</h1>
            <h6>Per month</h6>
            <button>Try now </button>
        </div>
    )
}

export default RedPremium