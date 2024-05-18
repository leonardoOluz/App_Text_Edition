import { Link } from 'react-router-dom';
import styles from './MenuLista.module.css';

const MenuLista = ({ link, imagem, texto, children }) => {
    return (
        <li className={styles.menu_lista}>
            <Link to={link}><img src={imagem} alt={texto} />
                {children}
            </Link>
        </li>
    )
}

export default MenuLista;