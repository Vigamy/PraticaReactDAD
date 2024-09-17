import styles from './RedFree.module.css'

function RedFree(props) {
    return(
        <div className={styles.container}>
            <h1>{props.name}</h1>
            <ul className={styles.lista}>
                <li>PNG templates</li>
                <li>Figma responsive
                components</li>
                <li>Constant updates</li>
                <li>Custom templates</li>
            </ul>
            <h1>${props.preco}</h1>
            <h6>Per month</h6>
            <button>Try now </button>
        </div>
    )
}

export default RedFree