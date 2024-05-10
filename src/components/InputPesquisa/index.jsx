import styles from './InputPesquisa.module.css';

const InputPesquisa = ({text = 'text', placText}) => {
    return(
        <input type={text} placeholder={placText} className={styles.pesquisa}/>
    )

}

export default InputPesquisa;