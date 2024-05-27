import styles from './Cabecalho.module.css';
import Imagem from './Imagem';
import logo from './image/Logo.png'
import lupa from './image/Font Awesome Icon (1).png'
import { IoClose } from "react-icons/io5";
import InputPesquisa from '../Input_Pesquisa';
import fotoPerfil from '@/../assets/LeoLuz.jpg'
import { useContext } from 'react';
import { CodigoContext } from 'context/CodigoContexto';
import { LuMenu } from "react-icons/lu";

const Cabecalho = () => {
    const { click, setClick } = useContext(CodigoContext);

    function clickAction() {
        setClick((prev) => prev = !prev)
    }

    return (
        <header className={styles.cabecalho}>
            <div className={styles.logo}>
                <Imagem src={logo} alt='logo alura' altura='35px' />
            </div>
            <div className={styles.container}>
                <InputPesquisa placText='Busque por algo' text='text' stilos='pesquisa' />
                <Imagem src={lupa} alt='lupa_pesquisa' altura='29px' lg='lupa' comprimento='29px' />
                {click
                    ? <LuMenu className={styles.menu_hamburguer} onClick={clickAction} size={25} color='white' />
                    : <IoClose className={styles.menu_hamburguer} onClick={clickAction} size={25} color='white' />
                }
            </div>
            <div className={styles.perfil}>
                <Imagem src={fotoPerfil} alt='foto perfil' lg='foto' altura="25px" comprimento="35px" />
                <p>@Leo</p>
            </div>
        </header>
    )
};

export default Cabecalho;