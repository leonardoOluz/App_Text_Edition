import styles from "./Option.module.css";

const Option = ({ childrean, valores }) => {
    return (
        <option className={styles.option} value={valores}>{childrean}</option>
    )
};

export default Option;