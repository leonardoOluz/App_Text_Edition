import styles from './Formulario.module.css';
import InputPesquisa from 'components/Input_Pesquisa';
import Option from './Option';
import Botao from 'components/Botao';
import EditorCodigo from 'components/EditorCodigo';
import { useContext } from 'react';
import { CodigoContext } from 'context/CodigoContexto';

const Formulario = () => {
    const { setLinguagem, cor, setCor } = useContext(CodigoContext);

    function optionSelecionado(e) {
        setLinguagem((prev) => prev = e.target.value)
    }

    return (
        <form className={styles}>
            <EditorCodigo />
            <div className={styles.container_formulario}>
                <label className={styles.label_form}>Seu Projeto</label>
                <InputPesquisa placText='Nome do seu projeto' text='text' stilos=""/>
                <textarea className='input_padrao' style={{ width: 'auto', padding: '1em', resize: 'none' }} placeholder='Descrição do seu projeto' />
                <label>Personalização</label>
                <div className={styles.container}>
                    <select onChange={optionSelecionado} className={`input_padrao ${styles.seletor} `} style={{ width: '100%' }}>
                        <Option childrean={'javascript'} valores={'javascript'} />
                        <Option childrean={'html'} valores={'html'} />
                        <Option childrean={'css'} valores={'css'} />
                    </select>
                    <InputPesquisa valor={cor} change={setCor} placText='Nome do seu projeto' text='color' stilos='color' />
                </div>
                <Botao Children='Salvar Projeto' />
            </div>
        </form>
    )
};

export default Formulario