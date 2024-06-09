import styles from "./Option.module.css";

const Option = ({ checked = false, children, valores = "" }) => {
    return (
        <option defaultValue={valores} disabled={checked} className={styles.option} value={valores}>{children}</option>
    )
};

export default Option;