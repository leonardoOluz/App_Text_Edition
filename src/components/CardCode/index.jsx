import styles from "./CardCode.module.css";

const CardCode = () => {
    return(<section className={styles.section}>
            <textarea  placeholder="Edition code"/>
        <div className={styles.container}>
            <div className={styles.circulos}/>
            <div className={styles.circulos}/>
            <div className={styles.circulos}/>
        </div>
    </section>)
};

export default CardCode;