import styles from './ContainerPrincipal.module.css';

const ContainerPrincipal = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default ContainerPrincipal;