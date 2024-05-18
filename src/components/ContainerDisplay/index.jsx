import styles from './ContainerDisplay.module.css';

const ContainerDisplay = ({children}) => {
    return(
        <div className={styles.container_display}>
            {children}
        </div>
    )
};

export default ContainerDisplay;