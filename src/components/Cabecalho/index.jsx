import styles from './Cabecalho.module.css';
import Imagem from './Imagem';
import logo from './image/Logo.png'
import { IoClose } from "react-icons/io5";
import InputPesquisa from '../Input_Pesquisa';
import fotoPerfil from '@/../assets/LeoLuz.jpg'
import { useContext } from 'react';
import { CodigoContext } from 'context/CodigoContexto';
import { LuMenu } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";

const Cabecalho = () => {
    const {
        click,
        setClick,
        clickPesquisa,
        setClickPesquisa
    } = useContext(CodigoContext);

    function clickMenu() {
        setClick((prev) => prev = !prev);
    }

    function clickInput() {
        setClickPesquisa((prev) => prev = !prev);
        if(click) setClick((prev) => prev = !prev);
    }

    return (
        <>
            {clickPesquisa
                ? <></>
                : <header className={styles.cabecalho} >
                    <div className={styles.logo}>
                        <Imagem src={logo} alt='logo alura' altura='35px' />
                    </div>
                    <div className={styles.container}>
                        <InputPesquisa placText='Busque por algo' text='text' stilos='pesquisa' />
                        {clickPesquisa
                            ? <></>
                            : <FaSearch className={styles.lupa_span} onClick={clickInput} size={20} color='white' />
                        }
                        {click
                            ? <IoClose className={styles.menu_hamburguer} onClick={clickMenu} size={25} color='white' />
                            : <LuMenu className={styles.menu_hamburguer} onClick={clickMenu} size={25} color='white' />
                        }
                    </div>
                    <div className={`${styles.perfil_lg_none} perfil`}>
                        <Imagem src={fotoPerfil} alt='foto perfil' lg='foto' altura="25px" comprimento="35px" />
                        <p>@Leo</p>
                    </div>
                </header>
            }
        </>
    )
};

export default Cabecalho;