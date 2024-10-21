Para rodar o projeto localmente rode no gitBash o comando: git clone https://github.com/MarcioASSJ/MarcioASSJ.github.io.git

Entre na pasta atividade-4

Abra o arquivo index.html no seu navegador diretamente ou utilize o Live Server no editor de código para iniciar um servidor local

**Informações sobre APIs utilizadas
API Kanye West Quotes (https://api.kanye.rest):
Utilizada para carregar frases aleatórias do Kanye West e exibi-las na seção "Serviços". As frases são carregadas dinamicamente ao clicar no botão "Carregar Frase do Kanye" ou Recarregar a página.

EmailJS (https://www.emailjs.com):
Implementado para permitir o envio de mensagens via formulário de contato sem a necessidade de configurar um backend próprio. A integração é feita com o serviço de EmailJS, que envia os dados para um endereço de e-mail configurado. Nessa parte procurei diversas formas de configurar o envio de fato mas não consegui fazer funcionar, ele valida os campos porém o envio não ocorre mesmo dando certo o teste feito direto na conta criada na ferramenta emailjs.com.

**Bibliotecas externas utilizadas
Swiper.js
Site: https://swiperjs.com/
Utilizado para criar o slider/carrossel no banner principal. Essa biblioteca permite navegação suave entre imagens, com botões de avanço e retrocesso, além de indicadores de slides.

AOS.js (Animate on Scroll)
Site: https://michalsnik.github.io/aos/
Utilizada para aplicar animações suaves enquanto o usuário rola a página. Especificamente, as animações são aplicadas na seção de testemunhos.

EmailJS
Site: https://www.emailjs.com/
Responsável pelo envio de mensagens via formulário de contato. Ele permite enviar emails diretamente pelo front-end utilizando um template configurado no site do EmailJS.

Google Fonts - Roboto
Utilizada para estilizar o texto com uma fonte moderna e legível.

Executando o projeto
Ao abrir o projeto localmente, você verá as seguintes seções:

Banner Principal: Um slider de imagens.
Sobre: Informações sobre o projeto.
Serviços: Um botão que carrega frases inspiradoras da API do Kanye West.
Testemunhos: Testemunhos reais de mesas de RPG que aparecem com animações suaves conforme o usuário rola a página.
Contato: Um formulário de contato que, ao ser preenchido e enviado deveria disparar um email via EmailJS, porém isso não consegui ajustar.
