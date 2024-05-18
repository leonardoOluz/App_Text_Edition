import styles from './Formulario.module.css';
import InputPesquisa from 'components/Input_Pesquisa';
import Option from './Option';
import Botao from 'components/Botao';
import EditorCodigo from 'components/EditorCodigo';

const Formulario = () => {
    return (
        <form className={styles}>

            <EditorCodigo />

            <div className={styles.container_formulario}>
                <label className={styles.label_form}>Seu Projeto</label>
                <InputPesquisa placText='Nome do seu projeto' text='text' />
                <textarea className='input_padrao' style={{ width: 'auto', padding: '1em', resize: 'none' }} placeholder='Descrição do seu projeto' />
                <label>Personalização</label>
                <div className={styles.container}>
                    <select className={`input_padrao ${styles.seletor} `} style={{ width: '100%' }}>
                        <Option childrean={'JavaScript'} valores={'JavaScript'} />
                        <Option childrean={'HTML5'} valores={'html5'} />
                        <Option childrean={'CSS3'} valores={'css3'} />
                    </select>
                    <InputPesquisa placText='Nome do seu projeto' text='color' stilos='color' />
                </div>
                <Botao Children='Salvar Projeto' />
            </div>
        </form>
    )
};

export default Formulario