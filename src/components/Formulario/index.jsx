import styles from './Formulario.module.css';
import InputPesquisa from 'components/Input_Pesquisa';
import Option from './Option';
import Botao from 'components/Botao';
import EditorCodigo from 'components/EditorCodigo';
import { useContext, useState } from 'react';
import { CodigoContext } from 'contexts/CodigoContexto';
import { useNavigate } from 'react-router-dom';
import { usePost } from "hooks/usePost"

const Formulario = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    const [hover, setHover] = useState(false)
    const { setState, saveNewPost, savePostEdited } = usePost();

    const { codigo,
        titulo,
        descricao,
        linguagem,
        cor,
        setCodigo,
        setTitulo,
        setDescricao,
        setLinguagem,
        setCor,
        id_post,
    } = useContext(CodigoContext);

    function configTimeOut() {
        setTimeout(() => {
            setToggle(true);
        }, 300)
    }

    function salvar(e) {
        e.preventDefault()
        id_post ? savePostEdited(id_post) : saveNewPost();
        setHover(true);
        setState();
        configTimeOut();
    }

    return (
        <form onSubmit={salvar} className={styles}>
            <EditorCodigo changed={(value) => setCodigo((prev) => prev = value)} valor={codigo} />
            <div className={styles.container_formulario}>
                <label className={styles.label_form}>Seu Projeto</label>
                <InputPesquisa
                    placText='Nome do seu projeto'
                    text='text' stilos=""
                    change={(e) => setTitulo((prev) => prev = e.target.value)}
                    valor={titulo} />
                <textarea
                    value={descricao}
                    onChange={(e) => setDescricao((prev) => prev = e.target.value)}
                    className='input_padrao' style={{ width: 'auto', padding: '1em', resize: 'none' }}
                    placeholder='Descrição do seu projeto'
                />
                <label>Personalização</label>
                <div className={styles.container}>
                    <select
                        value={linguagem}
                        onChange={(e) => setLinguagem((prev) => prev = e.target.value)}
                        className={`input_padrao ${styles.seletor} `}
                        style={{ width: '100%' }}
                    >
                        <Option childrean={'javascript'} valores={'javascript'} />
                        <Option childrean={'html'} valores={'html'} />
                        <Option childrean={'css'} valores={'css'} />
                    </select>
                    <InputPesquisa
                        nameInput={"color"}
                        valor={cor}
                        change={(e) => setCor((prev) => prev = e.target.value)}
                        placText='Nome do seu projeto' text='color' stilos='color'
                    />
                </div>
                <Botao Children='Salvar Projeto' hovered={hover && "btn_hover"} />
                {toggle && navigate("/comunidade")}
            </div>
        </form>
    )
};

export default Formulario