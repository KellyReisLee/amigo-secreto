let amigos = [];
const amigo = document.getElementById("nome-amigo");

function adicionar() {
  // Pegar o input - nome do amigo
  let amigo = document.getElementById("nome-amigo");

  let valorInput = firstLetterUpperCase(amigo.value);
  // Validação de valores:
  if (amigo.value == "") {
    alert("Precisa digitar nome!");
    return;
  } else {
    console.log(firstLetterUpperCase(amigo.value));
  }

  // if (amigos.indexOf(amigo.value) !== -1) {
  //   alert("Esse nome já existe na lista. Adicione outra pessoa!");
  //   return;
  // }

  // OU

  if (amigos.includes(valorInput)) {
    alert("Esse nome já existe na lista. Adicione outra pessoa!");
    document.getElementById("nome-amigo").value = "";
    return;
  }

  console.log(valorInput);

  // Validação caso coloque o mesmo nome em lowerCase:
  // if (amigos.includes(amigo.value).toLowerCase()) {
  //   alert("Esse nome já existe na lista. Adicione outra pessoa!");
  //   return;
  // }
  // Adicionando valores do input no array:
  amigos.push(amigo.value);
  // Pegar o elemento que vai mostrar o nome das pessoas incluídas na lista.
  let lista = document.getElementById("lista-amigos");
  if (lista.textContent == "") {
    lista.textContent = amigo.value;
  } else {
    lista.textContent = lista.textContent + `, ${amigo.value}`;
  }
  amigo.value = "";
  focus();
}

// http://cangaceirojavascript.com.br/como-embaralhar-arrays-algoritmo-fisher-yates/
function sortear() {
  if (amigos.length < 4) {
    alert("Você precisa adicionar mais de dois participantes!");
    return;
  }
  embaralha(amigos);

  // Pegando o elemento que vai armazenar o sorteio:
  let sorteio = document.getElementById("lista-sorteio");

  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      sorteio.innerHTML += amigos[i] + " ---> " + amigos[0] + " <br> ";
    } else {
      sorteio.innerHTML += amigos[i] + " ---> " + amigos[i + 1] + " <br> ";
    }
  }
}

// Função embaralhar:
function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    // atribuição via destructuring
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}

// Função que retorna todas as palavras do input com a primeira letra maiúscula.
function firstLetterUpperCase(inputUser) {
  let letra1 = inputUser[0].toUpperCase();
  console.log(letra1);
  let ateFinal = inputUser.length - 1;
  let restoPalavra = inputUser.substr(1, ateFinal).toLowerCase();
  console.log(restoPalavra);

  let textoNovo = `${letra1 + restoPalavra}`;
  return textoNovo;
}
