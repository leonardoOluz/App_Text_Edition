import styles from "./CardCode.module.css";

const CardCode = () => {
    return (<section className={styles.section}>
        <div className={styles.border}>
            <textarea placeholder="Edition code"  />
            <div className={styles.container}>
                <div className={styles.circulos} />
                <div className={styles.circulos} style={{ backgroundColor: '#FFBD2E' }} />
                <div className={styles.circulos} style={{ backgroundColor: '#27C93F' }} />
            </div>
        </div>
    </section>)
};

export default CardCode;