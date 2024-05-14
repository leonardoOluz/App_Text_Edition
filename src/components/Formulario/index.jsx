import styles from './Formulario.module.css';
import InputPesquisa from 'components/Input_Pesquisa';
import Option from './Option';
import Botao from 'components/Botao';

const Formulario = () => {
    return (
            <form>
                <label>Seu Projeto</label>
                <InputPesquisa placText='Nome do seu projeto' text='text' />
                <textarea className='input_padrao' style={{ width: 'auto', padding: '1em', resize: 'none' }} placeholder='Descrição do seu projeto' />
                <label>Personalização</label>
                <div className={styles.container}>
                    <select className={`input_padrao ${styles.seletor} `} style={{ width: '100%' }}>
                        <Option childrean={'JavaScript'} valores={'JavaScript'}/>
                        <Option childrean={'HTML5'} valores={'html5'} />
                        <Option childrean={'CSS3'} valores={'css3'} />
                    </select>
                    <InputPesquisa placText='Nome do seu projeto' text='color' stilos='color'/>
                </div>
                <Botao Children='Salvar Projeto'/>
            </form>
    )
};

export default Formulario