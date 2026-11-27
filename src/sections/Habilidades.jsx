import { habilidades } from '../data/habilidades';
import styles from './Habilidades.module.css';

export default function Habilidades() {
  return (
    <section id="habilidades" className={styles.secao}>
      <h2 className={styles.titulo}>Habilidades</h2>

      {habilidades.map((grupo) => (
        <div key={grupo.categoria} className={styles.grupo}>
          <h3 className={styles.categoria}>{grupo.categoria}</h3>

          <ul className={styles.tags}>
            {grupo.itens.map((item) => (
              <li key={item} className={styles.tag}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}