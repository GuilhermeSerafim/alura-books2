//Código de fácil leitura e assíncrono
async function buscaEndereco() {
    try {
        var consultaCep = await fetch('https://viacep.com.br/ws/01001250/json/');
        var consultaCepConvertida = await consultaCep.json();

        if (consultaCepConvertida.erro) {
            throw Error('Esse CEP não existe');
        };

        console.log(consultaCepConvertida);
    } catch (erro) {
        console.log(erro);
    };
};

buscaEndereco();