import styles from './ProjetoCard.module.css';

export default function ProjetoCard({ projeto }) {
  const { titulo, descricao, tecnologias, repositorio, demonstracao } = projeto;

  return (
    <article className={styles.card}>
      <h3>{titulo}</h3>
      <p>{descricao}</p>

      <ul>
        {tecnologias.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div className={styles.links}>
        <a href={repositorio} target="_blank" rel="noreferrer">
          Repositório
        </a>
        {demonstracao && (
          <a href={demonstracao} target="_blank" rel="noreferrer">
            Demonstração
          </a>
        )}
      </div>
    </article>
  );
}