document.querySelector('#qtde').addEventListener("change", atualizarPreco);
document.querySelector('#js').addEventListener("change", atualizarPreco);
document.querySelector('#layout-sim').addEventListener("change", atualizarPreco);
document.querySelector('#layout-nao').addEventListener("change", atualizarPreco);
document.querySelector('#prazo').addEventListener("change", function() {
    const prazo = document.querySelector('#prazo').value;
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana(s)`;

    atualizarPreco()
});


function atualizarPreco() {
    const qtde = document.querySelector('#qtde').value;
    const temJS = document.querySelector('#js').checked;
    const incluiLayaout = document.querySelector('#layout-sim').checked;
    const naoIncluiLayout = document.querySelector('#layout-nao').checked;
    const prazo = document.querySelector('#prazo').value;

    let preco = qtde * 100;
    if (temJS) preco = preco * 1.1;
    if (incluiLayaout) preco = preco + 500;

    let taxaUrgencia = 1 - prazo * 0.1;
    preco = preco + (preco * taxaUrgencia);

    document.querySelector('#preco').innerHTML = "R$ " + preco.toFixed(2);
};