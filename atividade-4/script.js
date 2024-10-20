// Inicializando Swiper.js
const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  // Inicializando AOS.js para animações
  AOS.init();
  
  // Função para consumir API e popular serviços
  // Função para consumir a API de tradução Draconic e exibir na seção "Serviços"
  function carregarFraseKanye() {
    fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('.servicos-container');
        
        // Criando um card para a frase do Kanye West
        const card = document.createElement('div');
        card.classList.add('servico-card');
        card.innerHTML = `
            <h3>Frase do Kanye West</h3>
            <p>"${data.quote}"</p>
        `;
        
        // Adicionando o card ao container de serviços
        container.appendChild(card);
    })
    .catch(error => {
        console.error('Erro ao carregar a frase:', error);
        
        // Exibindo mensagem de erro na página
        const container = document.querySelector('.servicos-container');
        const errorMessage = document.createElement('div');
        errorMessage.innerHTML = `<p>Erro ao carregar a frase. Tente novamente mais tarde.</p>`;
        container.appendChild(errorMessage);
    });
}

// Exemplo: Carregar a frase ao iniciar a página
carregarFraseKanye();


const depoimentos = [
    {
        nome: "Feyrborn",
        foto: "https://github.com/MarcioASSJ/MarcioASSJ.github.io/blob/main/atividade-4/ladino.png?raw=true",
        texto: "Phô, agora deu medo, se a mestre matou o personagem do próprio marido imagina o que vai fazer com nós"
    },
    {
        nome: "Kayle",
        foto: "https://github.com/MarcioASSJ/MarcioASSJ.github.io/blob/main/atividade-4/elfa-casada.png?raw=true",
        texto: "Acabei a campanha bem, a unica sobrevivente do grupo e ainda casei com um moreno RICOOO!!!"
    },
    {
        nome: "Kim Aron",
        foto: "https://github.com/MarcioASSJ/MarcioASSJ.github.io/blob/main/atividade-4/samurai.png?raw=true",
        texto: "Preciso de mais braços para poder usar mais espadas ao mesmo tempo, ajuda ai mestre"
    }
];

// Função para exibir os depoimentos na página
AOS.init({
    duration: 1000, // Duração da animação
    easing: 'ease-in-out',
  });
function carregarDepoimentos() {
    const container = document.querySelector('.testemunhos-container');
    
    depoimentos.forEach(depoimento => {
        const card = document.createElement('div');
        card.classList.add('testemunho-card');
        card.innerHTML = `
            <img src="${depoimento.foto}" alt="Foto de ${depoimento.nome}">
            <h3>${depoimento.nome}</h3>
            <p>"${depoimento.texto}"</p>
        `;
        container.appendChild(card);
    });
}

// Chama a função para carregar os depoimentos ao carregar a página
window.addEventListener('DOMContentLoaded', carregarDepoimentos);

  
  // Função para validar formulário de contato
  document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const telefone = document.getElementById('telefone').value;
      const mensagem = document.getElementById('mensagem').value;
  
      if (!nome || !email || !telefone || !mensagem) {
          alert('Por favor, preencha todos os campos.');
          return;
      }
  
      // Enviar email com EmailJS
// Inicializando EmailJS com o seu ID de usuário
(function() {
    emailjs.init("ukYuc3_OPdZLXRz2h");  // Substitua "SEU_USER_ID" pelo seu ID de usuário do EmailJS
})();

// Função para validar formulário de contato e enviar e-mail
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Impede o envio padrão do formulário

    // Obtenção dos valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    // Verificação de campos obrigatórios
    if (!nome || !email || !telefone || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Parâmetros a serem enviados para o EmailJS
    const templateParams = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem
    };

    // Enviar o e-mail usando EmailJS
    emailjs.send("service_6l40dh8", "template_2lkft8l", templateParams)
    .then(function(response) {
        alert('Mensagem enviada com sucesso!');
        // Limpa o formulário após o envio
        document.getElementById('contact-form').reset();
    }, function(error) {
        console.log('Erro ao enviar a mensagem:', error);
        alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');
    });
    });
});


