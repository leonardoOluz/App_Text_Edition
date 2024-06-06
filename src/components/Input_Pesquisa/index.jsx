import styles from './InputPesquisa.module.css';

const InputPesquisa = ({ nameInput, text = 'text', placText, stilos = "", valor, change }) => {
    return (
        <input
            name={nameInput}
            type={text}
            value={valor}
            onChange={change}
            placeholder={placText}
            className={
                stilos === "color"
                    ? `btn_padrao ${styles[stilos]}`
                    : `input_padrao ${styles[stilos]}`}
        />
    )

}

export default InputPesquisa;