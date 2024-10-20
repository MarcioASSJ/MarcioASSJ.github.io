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
  fetch('https://api.exemplo.com/servicos')
      .then(response => response.json())
      .then(data => {
          const container = document.querySelector('.servicos-container');
          data.forEach(servico => {
              const card = document.createElement('div');
              card.classList.add('servico-card');
              card.innerHTML = `
                  <h3>${servico.nome}</h3>
                  <p>${servico.descricao}</p>
              `;
              container.appendChild(card);
          });
      })
      .catch(error => {
          console.error('Erro ao carregar serviços:', error);
      });
  
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
      emailjs.send("service_xxxx", "template_xxxx", {
          nome: nome,
          email: email,
          telefone: telefone,
          mensagem: mensagem
      })
      .then(() => {
          alert('Mensagem enviada com sucesso!');
      }, (error) => {
          alert('Erro ao enviar a mensagem:', error);
      });
  });
  