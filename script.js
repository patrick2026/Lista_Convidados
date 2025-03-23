// 1. Seleciona o campo de entrada de texto pelo ID "nome"
const input = document.getElementById("nome");

// 2. Seleciona o formulário pelo ID "formulario"
const formulario = document.getElementById("formulario");

// 3. Seleciona a lista de convidados pelo ID "lista"
const listaConvidados = document.getElementById("lista");

// 4. Adiciona um "ouvinte" de evento ao formulário para o evento "submit"
formulario.addEventListener("submit", function (event) {
  // 5. Impede o comportamento padrão do formulário (recarregar a página)
  event.preventDefault();

  // 6. Obtém o valor digitado no campo de entrada de texto e remove espaços em branco no início e no fim
  const nome = input.value.trim();

  // 7. Valida o campo de entrada
  if (!nome) {
    // 8. Se o campo estiver vazio, exibe um alerta e interrompe a execução
    alert("Por favor, insira um nome válido.");
    return;
  }

  // 9. Verifica se o nome contém apenas letras e espaços
  if (!/^[A-Za-zÀ-ú\s]+$/.test(nome)) {
    // 10. Se o nome contiver caracteres inválidos, exibe um alerta e interrompe a execução
    alert("Por favor, insira apenas letras e espaços.");
    input.value = ""; // Limpa o campo de input
    return;
  }

  // 11. Verifica se o nome já existe na lista de convidados
  const nomesExistentes = Array.from(
    listaConvidados.querySelectorAll("span.nome")
  ).map((span) => span.textContent.trim());
  if (nomesExistentes.includes(nome)) {
    // 12. Se o nome já existir, exibe um alerta, limpa o campo de input e interrompe a execução
    alert("Este nome já foi adicionado.");
    input.value = ""; // Limpa o campo de input
    return;
  }

  // 13. Cria um novo elemento <li> para adicionar à lista de convidados
  const li = document.createElement("li");

  // 14. Cria um elemento <span> para exibir o nome do convidado
  const spanNome = document.createElement("span");
  spanNome.classList.add("nome"); // Adiciona uma classe para facilitar a seleção
  spanNome.textContent = nome; // Define o conteúdo do <span> como o nome do convidado

  // 15. Cria um elemento <span> para exibir a data e hora
  const spanDataHora = document.createElement("span");
  spanDataHora.classList.add("data-hora"); // Adiciona uma classe para facilitar a seleção

  // 16. Obtém a data e hora atual
  const dataAtual = new Date();
  const dia = String(dataAtual.getDate()).padStart(2, "0"); // Dia com dois dígitos
  const mes = String(dataAtual.getMonth() + 1).padStart(2, "0"); // Mês com dois dígitos
  const ano = dataAtual.getFullYear(); // Ano atual
  const hora = String(dataAtual.getHours()).padStart(2, "0"); // Hora com dois dígitos
  const minutos = String(dataAtual.getMinutes()).padStart(2, "0"); // Minutos com dois dígitos

  // 17. Formata a data e hora no formato "dd/mm/aaaa, hh:mm"
  const dataHoraFormatada = `${dia}/${mes}/${ano}, ${hora}:${minutos}`;

  // 18. Define o conteúdo do <span> com a data e hora formatada
  spanDataHora.textContent = ` ${dataHoraFormatada}`;

  // 19. Cria um botão "Deletar" para remover o convidado da lista
  const btnDeletar = document.createElement("button");
  btnDeletar.textContent = "Deletar"; // Define o texto do botão
  btnDeletar.classList.add("btn-deletar"); // Adiciona a classe CSS ao botão

  // 20. Adiciona um "ouvinte" de evento ao botão "Deletar" para remover o convidado
  btnDeletar.addEventListener("click", function () {
    listaConvidados.removeChild(li); // Remove o <li> da lista
  });

  // 21. Adiciona o <span> (nome do convidado) ao <li>
  li.appendChild(spanNome);

  // 22. Adiciona o <span> (data e hora) ao <li>
  li.appendChild(spanDataHora);

  // 23. Adiciona o botão "Deletar" ao <li>
  li.appendChild(btnDeletar);

  // 24. Adiciona o <li> (com o nome, data/hora e o botão) à lista de convidados
  listaConvidados.appendChild(li);

  // 25. Limpa o campo de entrada de texto após adicionar o convidado
  input.value = "";
});

// 26. Seleciona todos os botões com a classe "btn-deletar" existentes na lista inicial
const botoesDeletar = document.querySelectorAll(".btn-deletar");

// 27. Itera sobre cada botão para adicionar um evento de clique
botoesDeletar.forEach((botao) => {
  botao.addEventListener("click", function () {
    // 28. Encontra o <li> pai do botão clicado
    const itemLista = botao.closest("li");

    // 29. Remove o <li> da lista
    if (itemLista) {
      itemLista.remove();
    }
  });
});
