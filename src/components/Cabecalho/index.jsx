import styles from './Cabecalho.module.css';
import Imagem from './Imagem';
import logo from './image/Logo.png'
import lupa from './image/Font Awesome Icon (1).png'
import menuHamburgue from './image/Menu hamburguer.png';
import InputPesquisa from '../Input_Pesquisa';
import fotoPerfil from '@/../assets/LeoLuz.jpg'

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.logo}>
                <Imagem src={logo} alt='logo alura' altura='35px'/>
            </div>
            <div className={styles.container}>
                <InputPesquisa placText='Busque por algo' text='text' stilos='pesquisa' />
                <Imagem src={lupa} alt='lupa_pesquisa' altura='29px' lg='lupa' comprimento='29px' />
                <Imagem src={menuHamburgue} alt='menu hamburgue' altura='48px' lg='menu-hamburguer' comprimento='55px'/>
            </div>
            <div className={styles.perfil}>
                <Imagem src={fotoPerfil} alt='foto perfil' lg='foto' altura="25px" comprimento="35px"/>
                <p className={styles.perfil}>Leonardo</p>
            </div>
        </header>
    )
};

export default Cabecalho;