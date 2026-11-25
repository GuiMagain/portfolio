import GuiPort from '../assets/GuiPort.jpg';
import styles from './SobreMim.module.css';

export default function SobreMim() {
    return (
        <section id="sobre-mim">
            <div className={styles.conteudo}>
                <img src={GuiPort} className={styles.foto} alt="Foto de Guilherme Magain Brum" />
                <div className={styles.texto}>
                    <h2>Sobre Mim</h2>
                    <p>Olá! Meu nome é Guilherme, sou estudante de Análise e Desenvolvimento de Sistemas (UNINTER) e desenvolvedor formado em FullStack Python pela EBAC. Através da programação, busco transformar minha curiosidade e fascínio por tecnologia em soluções práticas e bem estruturadas.
                        Minha trajetória profissional começou longe do código — atuando por anos com atendimento direto ao público e gestão do próprio negócio — o que me trouxe uma visão muito clara sobre como resolver problemas reais e entender o que as pessoas realmente precisam. Hoje, aplico essa mesma dedicação na criação de aplicações web e sistemas que unem lógica, organização e propósito.</p>
                </div>
            </div>
        </section> 
    );
}