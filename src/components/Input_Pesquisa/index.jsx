import styles from './InputPesquisa.module.css';

const InputPesquisa = ({ text = 'text', placText, stilos = "", valor, change }) => {
    function changed(e) {
        change((prev) => prev = e.target.value)
    };
    return (
        <input
            type={text}
            value={valor}
            onChange={changed}
            placeholder={placText}
            className={
                stilos === "color"
                    ? `btn_padrao ${styles[stilos]}`
                    : `input_padrao ${styles[stilos]}`}
        />
    )

}

export default InputPesquisa;