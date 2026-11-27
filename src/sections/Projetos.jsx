import ProjetoCard from '../components/ProjetoCard';
import {projetos} from '../data/projetos';
import styles from './Projetos.module.css';

export default function Projetos() {
    return (

        <section id="projetos" className={styles.secao}>
            <h2 className={styles.titulo}>Projetos</h2>

            <div className={styles.grid}>
                {projetos.map((projeto) => (
                    <ProjetoCard key={projeto.id} projeto={projeto} />
                ))}
            </div>
        </section>
    );
}