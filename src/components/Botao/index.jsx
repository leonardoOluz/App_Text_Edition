import styles from './Botao.module.css';

const Botao = ({Children}) => {
    return(<button className={`input_padrao ${styles.btn}`}>{Children}</button>)
};

export default Botao