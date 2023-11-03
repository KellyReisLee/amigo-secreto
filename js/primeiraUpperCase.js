const texto = "PALAVRAS";
let letra1 = texto[0];
let ateFinal = texto.length - 1;
let restoPalavra = texto.substr(1, ateFinal).toLowerCase();
console.log(restoPalavra);

let textoNovo = `${letra1 + restoPalavra}`;
console.log(textoNovo);
