import Formulario from 'components/Formulario';
import styles from './Menu_Lateral.module.css';

const MenuLateral = () => {
    return (
        <aside className={styles.menu_lateral}>
            <Formulario />
        </aside>
    )
};

export default MenuLateral;