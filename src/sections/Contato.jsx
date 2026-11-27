import { useState } from 'react';
import { contatos } from '../data/contatos';
import styles from './Contato.module.css';

export default function Contato() {
    const [form, setForm] = useState({ nome: '', email: '', mensagem: ''});
    const[enviado, setEnviado] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((anterior) => ({...anterior, [name]: value}));
    }

    function handleSubmmit(e) {
        e.preventDefault();
        setEnviado(true);
    }


    return (
        <section id="contato" className={styles.secao}>
            <h2 className={styles.titulo}>Contato</h2>

            <ul className={styles.links}>
                {contatos.map((contato) => (
                    <li key={contato.nome}>
                        <a href={contato.url} target="_blank" rel="noreferrer">
                            {contato.nome}
                        </a>
                    </li>
                ))}
            </ul>

            <form className={styles.form} onSubmit={handleSubmmit}>
                <input
                    name="nome"
                    placeholder="Seu nome"
                    aria-label="Seu nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Seu email"
                    aria-label="Seu email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="mensagem"
                    placeholder="Sua mensagem"
                    aria-label="Sua mensagem"
                    rows="5"
                    value={form.mensagem}
                    onChange={handleChange}
                    required
                />
                <button type="submit">enviar</button>
            </form>

            {enviado && (
                <p className={styles.aviso}>
                    Mensagem registrada! O envio real ainda não foi configurado.
                </p>
            )}
        </section>
    );
}