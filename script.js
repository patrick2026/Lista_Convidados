//selecionando o formulario
const formulario = document.getElementById("formulario");

formulario.onsubmit = (event) => {
  event.preventDefault(); //PREVINIR PADRÃO RECARREGAR A PAGINA
  console.log("enviou");
};

//addEventListener => captura todos os eventos do formulario
