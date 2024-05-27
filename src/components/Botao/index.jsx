import styles from './Botao.module.css';

const Botao = ({ Children }) => {
    
    return (<button onClick={e => e.preventDefault()} className={`btn_padrao ${styles.btn}`}>{Children}</button>)
};

export default Botao