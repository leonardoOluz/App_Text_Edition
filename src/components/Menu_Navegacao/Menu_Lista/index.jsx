import styles from './MenuLista.module.css';

const MenuLista = ({link, imagem, texto, children }) => {
    return (
        <li className={styles.menu_lista}>
            <a href={link}>
                <img src={imagem} alt={texto} />
                {children}
            </a>
        </li>
    )
}

export default MenuLista;