import styles from './InputPesquisa.module.css';

const InputPesquisa = ({text = 'text', placText, stilos = 'pesquisa'}) => {
    return(
        <input type={text} placeholder={placText} className={styles[stilos]}/>
    )

}

export default InputPesquisa;