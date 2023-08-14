//Código de fácil leitura e assíncrono
async function buscaEndereco() {

var consultaCep = await fetch('https://viacep.com.br/ws/05776340/json/');

var consultaCepConvertida = await consultaCep.json();

console.log(consultaCepConvertida);

};

buscaEndereco();