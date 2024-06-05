import styles from './Formulario.module.css';
import InputPesquisa from 'components/Input_Pesquisa';
import Option from './Option';
import Botao from 'components/Botao';
import EditorCodigo from 'components/EditorCodigo';
import { useContext, useState } from 'react';
import { CodigoContext } from 'context/CodigoContexto';
import { Navigate } from 'react-router-dom';
import { Postagem } from "Hooks/Postagem"

const Formulario = () => {
    const [toggle, setToggle] = useState(false)
    const [hover, setHover] = useState(false)
    const { salveNewPoster, zerarVariaveis } = Postagem();

    const {
        setLinguagem,
        linguagem,
        cor,
        setCor,
        titulo,
        setTitulo,
        setDescricao,
        descricao
    } = useContext(CodigoContext);

    function configTimeOut() {
        setTimeout(() => {
            zerarVariaveis();
            setToggle(true);
        }, 300)

    }

    function optionSelecionado(e) {
        setLinguagem((prev) => prev = e.target.value)
    }

    function salvar(e) {
        e.preventDefault()
        if (titulo) {
            setHover(true);
            salveNewPoster();
            configTimeOut();
        } else {
            alert("Necessario preenchimento dos campos obrigatorio")
        }
    }

    return (
        <form onSubmit={salvar} className={styles}>
            <EditorCodigo />
            <div className={styles.container_formulario}>
                <label className={styles.label_form}>Seu Projeto</label>
                <InputPesquisa placText='Nome do seu projeto' text='text' stilos="" change={setTitulo} valor={titulo} />
                <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} className='input_padrao' style={{ width: 'auto', padding: '1em', resize: 'none' }} placeholder='Descrição do seu projeto' />
                <label>Personalização</label>
                <div className={styles.container}>
                    <select value={linguagem} onChange={optionSelecionado} className={`input_padrao ${styles.seletor} `} style={{ width: '100%' }}>
                        <Option childrean={'javascript'} valores={'javascript'} />
                        <Option childrean={'html'} valores={'html'} />
                        <Option childrean={'css'} valores={'css'} />
                    </select>
                    <InputPesquisa valor={cor} change={setCor} placText='Nome do seu projeto' text='color' stilos='color' />
                </div>
                <Botao Children='Salvar Projeto' hovered={hover && "btn_hover"} />
                {toggle && <Navigate to="/comunidade" />}
            </div>
        </form>
    )
};

export default Formulario