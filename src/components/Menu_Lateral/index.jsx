import Titulo from 'components/Titulo';
import styles from './MenuLateral.module.css';
import InputPesquisa from 'components/Input_Pesquisa';

const MenuLateral = () => {
    return(
        <aside className={styles.menu_lateral}>
            <form>
                <Titulo>Seu Projeto</Titulo>
                <InputPesquisa placText='Nome do seu projeto' text='text' stilos='input'/>
            </form>
        </aside>
    )
};

export default MenuLateral