import styles from './Header.module.css';

const links = [
    {id: 'sobre-mim', label: 'Sobre Mim' },
    {id: 'projetos', label: 'Projetos' },
    {id: 'habilidades', label: 'Habilidades'},
    {id: 'contato', label: 'Contato'},
];

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="#sobre-mim" className={styles.marca}>
                Guilherme
            </a>

            <nav aria-label="Navegação principal">
                <ul className={styles.lista}>
                    {links.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className={styles.link}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}