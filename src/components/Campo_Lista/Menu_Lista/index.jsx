import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLista.module.css';

const MenuLista = ({ link, imagem, texto, children, handleClick = null }) => {
    let path = useLocation();
    return (
        <li className={styles.menu_lista}>
            <Link onClick={handleClick} to={link} style={path.pathname === link ? { color: "white" } : {}} >
                <img
                    src={imagem}
                    alt={texto}
                    style={path.pathname === link
                        ? { backgroundColor: "#5081FB" }
                        : {}}
                />
                {children}
            </Link>
        </li>
    )
}

export default MenuLista;