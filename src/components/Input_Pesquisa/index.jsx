import styles from './InputPesquisa.module.css';

const InputPesquisa = ({text = 'text', placText, stilos }) => {
    return(
        <input type={text} placeholder={placText} className={`input_padrao ${styles[stilos]}`}/>
    )

}

export default InputPesquisa;