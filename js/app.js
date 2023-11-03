const inputUser = document.getElementById("nome-amigo");
const displayUsers = document.getElementById("lista-amigos");
const sorteio = document.getElementById("lista-sorteio");

let lista = [];
function pegarElementos() {
  let valorInput = inputUser.value;

  if (valorInput.length == 0) {
    alert("Digite um nome no campo!");
    return;
  }

  lista.push(inputUser.value);
  let elementosUnicos = lista.filter(unique);

  console.log(elementosUnicos);
  displayUsers.textContent = elementosUnicos;

  limpar();
}

function adicionar() {
  pegarElementos();
}

// Função limpar e iniciar
function limpar() {
  document.getElementById("nome-amigo").value = "";
  inputUser.removeAttribute("disabled");
}

// Sortear
function sortear() {
  let valorInput = inputUser.value;

  lista.push(inputUser.value);
  let elementosUnicos = lista.filter(unique);

  //console.log(elementosUnicos);
  //console.log(lista);

  displayUsers.textContent = embaralharLista(elementosUnicos);

  i = 0;
  while (i < elementosUnicos.length - 1) {
    if (elementosUnicos[elementosUnicos.length - 1] == "") {
      elementosUnicos[elementosUnicos.length - 1] = elementosUnicos[0];

      sorteio.innerHTML += `<p>${elementosUnicos[i]} ---> ${
        elementosUnicos[i + 1]
      }</p>`;
    } else {
      sorteio.innerHTML += `<p>${elementosUnicos[i]} ---> ${
        elementosUnicos[i + 1]
      }</p>`;
    }

    i++;
  }

  limpar();
  inputUser.setAttribute("disabled", "");
}

// Pegar só elementos únicos:
function unique(value, index, self) {
  return self.indexOf(value) === index;
}

// Função embaralhar array
function embaralharLista(array) {
  array.sort(() => Math.random() - 0.5);
}

function reiniciar() {
  document.getElementById("nome-amigo").value = "";
  inputUser.removeAttribute("disabled");
  sorteio.textContent = "";
  focus();
  console.log("Hello kelly");
}
