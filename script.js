function enviarWpp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  const email = document.getElementById("email").value;
  const telefone = "5581983406667";

  const texto = `Olá! Me chamo ${nome}, ${mensagem}, meu email para contato: ${email}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}/?text=${msgFormatada}`;

  console.log(url);

  window.open(url, "_blank");
}

const texts = {
  pt: {
    inicio: "Início",
    sobre: "Sobre",
    projetos: "Projetos",
    contato: "Contato",
    nome: "Lucas Anselmo",
    profissao: "Desenvolvedor FullStack",
    sobreTitulo: "Sobre mim",
    sobreTexto:
      "Sou um desenvolvedor FullStack com foco em Javascript/Typescript e Next.js, sempre buscando criar aplicações performáticas, escaláveis e com uma experiência de usuário fluida. Minha trajetória começou no design gráfico, onde usei-o por 10 anos, até que a programação entrou na minha vida e virou meu foco principal. Me formei em Análise e Desenvolvimento de Sistemas e, desde então, venho me especializando cada vez mais explorando tecnologias. Estou aqui para construir soluções que realmente fazem diferença. Além disso, estou sempre buscando evoluir, tanto no código quanto na forma de pensar tecnologia de maneira estratégica.",
    projetosTitulo: "Meus Projetos",
    paragrafoQuizzma:
      "O Quizzma é uma plataforma de questionários interativos voltada para a educação e a conscientização sobre questões sociais, especialmente a desigualdade de gênero. Com uma interface moderna e fácil de usar, desenvolvida com Next.js 14 e Tailwind CSS, o Quizzma oferece questionários dinâmicos e categorizados que permitem aos usuários responder a perguntas, salvar seus resultados e analisar seu progresso ao longo do tempo.",
    paragrafoTyping:
      "Um aplicativo dinâmico Web criado para desafiar e aprimorar as habilidades de digitação. Os recursos incluem suporte a vários idiomas (inglês e português), níveis de dificuldade ajustáveis, rastreamento de velocidade e precisão em tempo real e um design limpo e responsivo desenvolvido com TypeScript, Next.js e Tailwind CSS.",
    paragrafoToDoList:
      "Um aplicativo de lista de tarefas simples e funcional criado com HTML, CSS e JavaScript. Ele permite que os usuários gerenciem tarefas com recursos como adição, edição e exclusão de tarefas. Embora atualmente seja apenas de front-end, o projeto foi desenvolvido para evoluir para um aplicativo de pilha completa, integrando um banco de dados para persistência de tarefas e recursos avançados.",
    contatoTitulo: "Quer trabalhar comigo?",
    contatoTexto: "Entre em contato:",
    botaoEnviar: "Enviar",
  },
  en: {
    inicio: "Home",
    sobre: "About",
    projetos: "Projects",
    contato: "Contact",
    nome: "Lucas Anselmo",
    profissao: "FullStack Developer",
    sobreTitulo: "About me",
    sobreTexto:
      "I'm a FullStack developer with a focus on Javascript/Typescript and Next.js, always looking to create performant, scalable applications with a fluid user experience. My career began in graphic design, where I used it for 10 years, until programming came into my life and became my main focus. I graduated in Systems Analysis and Development and, since then, I've been specializing more and more in exploring technologies. I'm here to build solutions that really make a difference. What's more, I'm always looking to evolve, both in the code and in the way I think about technology strategically.",
    projetosTitulo: "My Projects",
    paragrafoQuizzma:
      "Quizzma is an interactive quiz platform focused on educating and raising awareness about social issues, especially gender inequality. With a modern, user-friendly interface built using Next.js 14 and Tailwind CSS, Quizzma offers dynamic, categorized quizzes that allow users to answer questions, save their results, and review their progress over time.",
    paragrafoTyping:
      "A dynamic web application built to challenge and enhance typing skills. Features include multi-language support (English and Portuguese), adjustable difficulty levels, real-time speed and accuracy tracking, and a clean, responsive design developed with TypeScript, Next.js, and Tailwind CSS.",
    paragrafoToDoList:
      "A simple and functional To-Do List application built with HTML, CSS, and JavaScript. It allows users to manage tasks with features like adding, editing, and deleting tasks. While currently front-end only, the project is designed to evolve into a full-stack application, integrating a database for task persistence and advanced features.",
    contatoTitulo: "Want to work with me?",
    contatoTexto: "Get in touch:",
    botaoEnviar: "Send",
  },
};

// Função para mudar o idioma
function changeLanguage(lang) {
  document.querySelector(".menu-link[href='#inicio']").textContent =
    texts[lang].inicio;
  document.querySelector(".menu-link[href='#sobre']").textContent =
    texts[lang].sobre;
  document.querySelector(".menu-link[href='#projetos']").textContent =
    texts[lang].projetos;
  document.querySelector(".menu-link[href='#contato']").textContent =
    texts[lang].contato;

  document.querySelector(".h1-main").textContent = texts[lang].nome;
  document.querySelector(".paragrafo-main").textContent = texts[lang].profissao;

  document.querySelector(".sobre-titulo").textContent = texts[lang].sobreTitulo;
  document.querySelector(".sobre-paragrafo").textContent =
    texts[lang].sobreTexto;

  document.querySelector(".projetos-titulo").textContent =
    texts[lang].projetosTitulo;

  document.querySelector(".paragrafo-quizzma").textContent =
    texts[lang].paragrafoQuizzma;

  document.querySelector(".paragrafo-typing").textContent =
    texts[lang].paragrafoTyping;

  document.querySelector(".paragrafo-todolist").textContent =
    texts[lang].paragrafoToDoList;

  document.querySelector(".h2-contato").textContent = texts[lang].contatoTitulo;
  document.querySelector(".paragrafo-contatos").textContent =
    texts[lang].contatoTexto;

  document.querySelector(".botao-form").textContent = texts[lang].botaoEnviar;
}

// Adiciona evento para trocar idioma ao selecionar no dropdown
document
  .getElementById("language-selector")
  .addEventListener("change", (event) => {
    changeLanguage(event.target.value);
  });
