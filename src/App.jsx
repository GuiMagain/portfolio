import Header from './components/Header';
import SobreMim from './sections/SobreMim';
import Projetos from './sections/Projetos';
import Habilidades from './sections/Habilidades';
import Contato from './sections/Contato';

export default function App() {
  return (
    <>
    <Header />
    <main>
      <SobreMim />
      <Projetos />
      <Habilidades />
      <Contato />
    </main>
    </>
  );
}