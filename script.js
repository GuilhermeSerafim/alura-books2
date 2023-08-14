//Código de fácil leitura e assíncrono
async function buscaEndereco(cep) {
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();

        if (consultaCepConvertida.erro) {
            throw Error('Esse CEP não existe');
        };

        return consultaCepConvertida;
    } catch (erro) {
        console.log(erro);
    };
};

let ceps = ['01001000', '05776340', '01001001'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntoCeps).then(respostas => console.log(respostas));