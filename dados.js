const cursos = [
    {
      id: 1,
      nome: "Técnico em Administração",
      descricao: "Formação para atuar na gestão administrativa de empresas, organizações públicas e privadas.",
      duracao: "3 semestres", // 1200h segundo a CPS :contentReference[oaicite:0]{index=0}  
      img: "https://i.pinimg.com/474x/7a/24/d6/7a24d6d6d9b25efb7a35741fc47acfb1.jpg",
      conteudo: [
        "Contabilidade",
        "Legislação trabalhista",
        "Gestão de recursos humanos",
        "Planejamento estratégico",
        "Marketing",
        "Empreendedorismo",
        "Atendimento e relacionamento com clientes"
      ],
      matriz: "http://www.etelg.com.br/paginaete/cursos/2026_mc_administracao_mtec_l14945_v2.pdf"
    },
    
    {
      id: 2,
      nome: "Técnico em Automação Industrial",
      descricao: "Formação para projetar, instalar, programar e manter sistemas automatizados em indústrias.",
      duracao: "3 semestres", // segundo arquivo de cursos CPS para automação industrial :contentReference[oaicite:1]{index=1}  
      img: "https://i.pinimg.com/736x/fd/18/b2/fd18b2d0696c17a376d53c3b3e90852c.jpg",
      conteudo: [
        "Programação de CLPs",
        "Sistemas de controle automatizado",
        "Eletrônica analógica e digital",
        "Sensores e atuadores",
        "Instrumentação industrial",
        "Redes industriais",
        "Manutenção de sistemas automatizados"
      ],
      matriz: "http://www.etelg.com.br/paginaete/cursos/2024_mc_automacao-industrial_mtec.doc"
    },
    {
      id: 3,
      nome: "Técnico em Comércio Exterior",
      descricao: "Formação para atuar em operações internacionais de importação e exportação, câmbio, logística e comércio global.",
      duracao: "2 semestres", // segundo lista CPS: 800 h para Comércio Exterior :contentReference[oaicite:2]{index=2}  
      img: "https://advb.org.br/wp-content/uploads/2024/04/imagem-ilustrativa.png",
      conteudo: [
        "Negociação internacional",
        "Legislação aduaneira",
        "Tributação no comércio exterior",
        "Marketing internacional",
        "Finanças internacionais",
        "Transporte e logística internacional",
        "Inglês e espanhol comercial"
      ],
      matriz:"http://www.etelg.com.br/paginaete/cursos/2026_mc_comercio_exterior_mtec-n_l14945.pdf"
    },
    {
      id: 4,
      nome: "Técnico em Desenvolvimento de Sistemas",
      descricao: "Formação para analisar, projetar e desenvolver sistemas de software para diferentes plataformas.",
      duracao: "3 semestres", // segundo CPS para Desenvolvimento de Sistemas :contentReference[oaicite:3]{index=3}  
      img: "https://i.pinimg.com/736x/82/ca/89/82ca89cbb1536365d658abf414a098f4.jpg",
      conteudo: [
        "Lógica de programação",
        "Algoritmos",
        "Banco de dados",
        "Programação orientada a objetos",
        "Desenvolvimento web",
        "Testes de software",
        "Segurança da informação",
        "Interfaces de usuário"
      ],
      matriz:"http://www.etelg.com.br/paginaete/cursos/DESENVOLVIMENTO%20DE%20SISTEMAS.PDF"
    },
    {
      id: 5,
      nome: "Técnico em Eletrônica",
      descricao: "Formação para projetar, instalar e dar manutenção em circuitos eletrônicos e sistemas embarcados.",
      duracao: "3 semestres", // muitos cursos técnicos de Eletrônica da ETEC têm 1200h semelhantes a outros técnicos :contentReference[oaicite:4]{index=4}  
      img: "https://i.pinimg.com/736x/7c/6c/3e/7c6c3e4698685ea6e661a6e46e585d13.jpg",
      conteudo: [
        "Eletrônica analógica",
        "Eletrônica digital",
        "Projeto de circuitos",
        "Sistemas embarcados",
        "Comunicação digital",
        "Medição e instrumentação eletrônica",
        "Montagem e manutenção de placas"
      ],
      matriz:""
    },
    {
      id: 6,
      nome: "Técnico em Eletroeletrônica",
      descricao: "Formação híbrida para atuar tanto em parte elétrica quanto eletrônica de sistemas industriais e residenciais.",
      duracao: "3 semestres", // suposição alinhada com outros cursos técnicos da CPS  
      img: "https://i.pinimg.com/736x/6a/19/c6/6a19c60d88f7bfb05d9805419a00b166.jpg",
      conteudo: [
        "Instalações elétricas",
        "Comandos elétricos",
        "Eletrônica digital",
        "Sistemas de acionamento",
        "Sistemas de automação simples",
        "Manutenção elétrica",
        "Proteção de circuitos"
      ],
      matriz:"http://www.etelg.com.br/paginaete/cursos/ELETROELETRÔNICA.PDF"
    },
    {
      id: 7,
      nome: "Técnico em Informática para Internet",
      descricao: "Curso voltado para desenvolvimento web, design de interfaces e tecnologias para a internet.",
      duracao: "3 semestres", // suposição baseada no tempo típico de técnico CPS  
      img: "https://i.pinimg.com/236x/57/ea/89/57ea898844b18668b14be3a189928999.jpg",
      conteudo: [
        "HTML, CSS e JavaScript",
        "Desenvolvimento front-end",
        "Programação back-end",
        "Banco de dados",
        "Mobile web",
        "Acessibilidade e usabilidade",
        "Experiência do usuário (UX)",
        "Segurança web"
      ],
      matriz:"http://www.etelg.com.br/paginaete/cursos/INFORMÁTICA%20PARA%20INTERNET.PDF"
    },
    {
      id: 8,
      nome: "Técnico em Logística",
      descricao: "Formação para planejar, operar e controlar a movimentação e estocagem de produtos e serviços.",
      duracao: "3 semestres", // segundo Etec Dra. Ruth Cardoso :contentReference[oaicite:5]{index=5}  
      img: "https://i.pinimg.com/736x/a2/60/55/a260554ed14acf6dbcf9b19ed6e40429.jpg",
      conteudo: [
        "Gestão de estoques",
        "Armazenagem",
        "Transporte e distribuição",
        "Planejamento logístico",
        "Compras e suprimentos",
        "Indicadores de desempenho logístico",
        "Tecnologia aplicada à logística"
      ],
      matriz:""
    },
    {
      id: 9,
      nome: "Técnico em Mecânica",
      descricao: "Formação para projetar, fabricar e fazer a manutenção de máquinas, peças e sistemas mecânicos.",
      duracao: "3 semestres", // segundo site CPS para Mecânica :contentReference[oaicite:6]{index=6}  
      img: "https://i.pinimg.com/736x/88/55/8c/88558c1c940a62e387ed13712834357b.jpg",
      conteudo: [
        "Desenho técnico mecânico",
        "Processos de fabricação",
        "Elementos de máquina",
        "Metrologia",
        "Automação mecânica",
        "Manutenção mecânica",
        "Segurança no trabalho"
      ],
      matriz:""
    },
    {
      id: 10,
      nome: "Técnico em Mecatrônica",
      descricao: "Integra mecânica, eletrônica e automação para desenvolver sistemas robóticos e automatizados.",
      duracao: "3 semestres", // suposição semelhante a outros técnicos integrados / CPS  
      img: "https://i.pinimg.com/originals/4d/08/fb/4d08fb74db5ff9e4dc28f6e13352a3d9.jpg",
      conteudo: [
        "Robótica",
        "Sistemas automatizados",
        "Eletrônica embutida",
        "Controle e sensores",
        "Atuadores",
        "Mecânica aplicada",
        "Projeto final / integração de sistemas"
      ],
      matriz:"http://www.etelg.com.br/paginaete/cursos/2026_mc_mecatronica_mtec-pi_l14945_v2.pdf"
    },
    {
      id: 11,
      nome: "Técnico em Meio Ambiente",
      descricao: "Formação para atuar em projetos de sustentabilidade, preservação ambiental e gestão de resíduos.",
      duracao: "3 semestres", // suposição porque muitos técnicos da CPS têm essa duração  
      img: "https://i.pinimg.com/736x/6d/be/4c/6dbe4cd79e17684b44623945e689a19c.jpg",
      conteudo: [
        "Ecologia",
        "Gestão de resíduos",
        "Sustentabilidade",
        "Legislação ambiental",
        "Recursos hídricos",
        "Educação ambiental",
        "Projetos de conservação"
      ],
      matriz:""
    },
    {
      id: 12,
      nome: "Técnico em Química",
      descricao: "Formação para realizar análises químicas, controlar processos industriais e atuar em laboratório.",
      duracao: "1 ano e 6 meses", // para Etec específica :contentReference[oaicite:7]{index=7}  
      img: "https://i.pinimg.com/236x/f0/d6/20/f0d6205a78e53e8e8a248da4a503ee87.jpg",
      conteudo: [
        "Análise química",
        "Química inorgânica",
        "Química orgânica",
        "Físico-química",
        "Operações unitárias químicas",
        "Controle de qualidade",
        "Segurança em laboratório"
      ],
      matriz:"http://www.etelg.com.br/paginaete/cursos/2026_mc_quimica_mtec-pi_l14945_v2.pdf"
    },
    {
      id: 13,
      nome: "Técnico em Secretariado",
      descricao: "Formação para apoiar atividades administrativas, organizacionais e de comunicação em empresas e instituições.",
      duracao: "3 semestres", // suposição com base em cursos técnicos similares  
      img: "https://i.pinimg.com/736x/e4/92/e2/e492e220e29851b54d39b03aad133605.jpg",
      conteudo: [
        "Comunicação profissional",
        "Redação empresarial",
        "Atendimento ao cliente",
        "Organização de reuniões",
        "Arquivo e gestão documental",
        "Noções de contabilidade",
        "Ética e cidadania organizacional"
      ],
      matriz:""
    },
    {
      id: 14,
      nome: "Técnico em Ciências Humanas e Sociais Aplicadas",
      descricao: "Curso voltado para comunicação, sociologia, filosofia e estudos sociais no contexto técnico.",
      duracao: "3 semestres", // suposição  
      img: "https://i.pinimg.com/736x/b4/f9/45/b4f94592f059e199e9b413141868dba6.jpg",
      conteudo: [
        "Sociologia",
        "Filosofia",
        "Comunicação oral e escrita",
        "Linguagens artísticas",
        "Ética e cidadania",
        "Políticas públicas",
        "Projeto social"
      ],
      matriz:"http://www.etelg.com.br/paginaete/cursos/2026_mc_emifa_ciencias_humanas_e_sociais_aplicadas_v2.pdf"
    },
    {
      id: 15,
      nome: "Técnico em Comércio (Modular)",
      descricao: "Formação técnica modular para atuar em empresas comerciais, vendas e atendimento corporativo.",
      duracao: "3 semestres", // suposição  
      img: "https://i.pinimg.com/736x/f4/cb/58/f4cb581e932c053445fc009f571ba6a7.jpg",
      conteudo: [
        "Técnicas de vendas",
        "Marketing",
        "Atendimento ao cliente",
        "Gestão de estoque",
        "Negociação",
        "Comércio eletrônico",
        "Logística básica"
      ],
      matriz:""
    },
    {
      id: 16,
      nome: "Técnico em Contabilidade (Modular)",
      descricao: "Formação para atuar com rotinas contábeis, fiscais e financeiras em empresas e escritórios.",
      duracao: "3 semestres", // suposição  
      img: "https://i.pinimg.com/736x/52/d2/12/52d21244b4d17e25cf0b7056a939d68f.jpg",
      conteudo: [
        "Contabilidade geral",
        "Contabilidade de custos",
        "Fiscal e tributária",
        "Matemática financeira",
        "Folha de pagamento",
        "Auditoria básica",
        "Ética profissional"
      ],
      matriz:""
    },
    {
      id: 17,
      nome: "Técnico em Guia de Turismo",
      descricao: "Formação para atuar no planejamento e condução de roteiros turísticos, atendimento e gestão de turismo.",
      duracao: "3 semestres", // suposição  
      img: "https://i.pinimg.com/736x/57/cf/71/57cf71c3955398e25d11dfe267d1d55c.jpg",
      conteudo: [
        "Geografia turística",
        "História e cultura",
        "Marketing turístico",
        "Guiamento e condução de grupos",
        "Legislação turística",
        "Sustentabilidade no turismo",
        "Planejamento de roteiros"
      ],
      matriz:""
    },
    {
      id: 18,
      nome: "Técnico em Programação de Jogos Digitais",
      descricao: "Formação para desenvolver jogos para diferentes plataformas, com foco em lógica, design e interatividade.",
      duracao: "3 semestres", // conforme lista CPS para Jogos Digitais :contentReference[oaicite:8]{index=8}  
      img: "https://i.pinimg.com/736x/4c/68/06/4c6806f05c5295ae674c31fd7f4df796.jpg",
      conteudo: [
        "Lógica de jogos",
        "Design de personagens",
        "Programação de jogos",
        "Computação gráfica",
        "Roteiro de jogos",
        "Física para jogos",
        "Monetização e mercado de jogos"
      ],
      matriz:""
    },
    {
      id: 19,
      nome: "Técnico em Transações Imobiliárias",
      descricao: "Formação para atuar no mercado imobiliário, intermediação de imóveis, documentação e negociação.",
      duracao: "3 semestres", // suposição similar a outros técnicos  
      img: "https://i.pinimg.com/736x/1e/50/9d/1e509d84215ae9013852345e1d1177d9.jpg",
      conteudo: [
        "Documentação imobiliária",
        "Negociação de imóveis",
        "Avaliação de imóveis",
        "Mercado imobiliário",
        "Legislação imobiliária",
        "Corretagem e vendas",
        "Marketing imobiliário"
      ],
      matriz:""
    }
  ];
  