# Timezone Webpage Project

Feito com o objetivo de praticar o uso do **npm**, este projeto é uma página web simples que exibe a hora atual do usuário, com a funcionalidade de selecionar e exibir o horário em diferentes fusos horários. A aplicação utiliza principalmente as bibliotecas **dayjs** e **micromodal**, instaladas via **npm**, para manipulação e exibição do tempo e controle de modais, respectivamente.

## Funcionalidades

- Exibe a hora atual do usuário na página inicial, atualizada em tempo real.
- Permite que o usuário selecione um fuso horário a partir de uma lista no modal.
- Atualiza a data e a hora exibida com base no fuso horário selecionado.
- Modal de seleção de fuso horário abre ao clicar em um botão e fecha automaticamente após a escolha do usuário.

## Tecnologias Utilizadas

- **HTML, CSS, JavaScript**: Linguagens principais para a estrutura, estilo e interatividade da página.
- **npm**: Gerenciador de pacotes utilizado para instalar dependências do projeto.
- **[dayjs](https://day.js.org/)**: Biblioteca de manipulação de datas e horas usada para exibir e atualizar o tempo.
- **[micromodal](https://micromodal.vercel.app/)**: Biblioteca leve de modais para gerenciar a exibição do modal de seleção de fuso horário.
- **Font Awesome**: Usado para adicionar ícones. Instalado via npm e incluído no HTML por meio do arquivo CSS.
- **[Browserify](http://browserify.org/)**: Ferramenta para compilar e agrupar dependências JavaScript, permitindo o uso de módulos no navegador.

## Pré-requisitos

- **Node.js** e **npm** instalados. O projeto usa **npm** para gerenciar dependências.