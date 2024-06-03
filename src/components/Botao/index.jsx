import styles from './Botao.module.css';

const Botao = ({ Children, clicked, hovered = "" }) => {

    return (<button
        onClick={clicked}
        className={`btn_padrao ${styles.btn} ${styles[hovered]}`}
    >
        {Children}
    </button>)
};

export default Botao