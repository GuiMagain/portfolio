export const projetos = [
    {
        id: 'pokemon-api',
        titulo: 'API Pokémon',
        descricao:
            'API REST em Python que  consome dados da PokeAPI e os armazena em banco relacional com CRUD completo. o cache usa Redis, e o aquecimento do cache roda de forma assíncrona com Celery e Kafka.',
        tecnologias: ['Python', 'FastAPI', 'Redis', 'Celery', 'Kafka', 'Podman'],
        repositorio: 'https://github.com/GuiMagain/pokemon-api',
        demonstracao: 'https://pokemon-api-aebh.onrender.com',
        imagem:  null,
    },
    {
        id: 'barbearia',
        titulo: 'Barbearia Bootstrap',
        descricao:
            'Site responsivo para uma barvearia, com vitrine de serviços em grid, mural de depoimentos em layout masonry e formulário para contato.',
        tecnologias: ['HTML5', 'CSS3', 'Bootstrap 5'],
        repositorio: 'https://github.com/GuiMagain/barbearia.bootstrap',
        demonstracao: null,
        imagem: null,
    },
    {
        id: 'pet-style',
        titulo: 'Pet&Style',
        descricao: 
            'Site de produtos para pets, com layout em TailWind CSS.',
        tecnologias: ['HTML5', 'TailWind CSS'],
        repositorio: 'https://github.com/GuiMagain/site.pet',
        demonstracao: null,
        imagem: null,
    },
]