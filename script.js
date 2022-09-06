// Danilo - R$70 fixo até 10 entregas + taxas acima de R$3,99.
// Gabriel - R$60 fixo até 10 entregas + taxas acima de R$3,99.
// Motoboy taxa - R$60 fixo até 10 entregas + taxas acima de R$3,99.

//se quantidade de entregas for menor ou igual 10, motoboy recebe taxa fixa conforme o nome selecionado
//se quantidade de entregas for maior que 10, motoboy recebe taxa fixa + $4 por entrega.

let inputData = document.getElementById("data");
let inputEntregador = document.getElementById("entregador");//para se comunicar com as informações inseridas no campo input
let inputEntregas = document.getElementById("entregas");//para se comunicar com as informações inseridas no campo input
let inputQtdTaxas = document.getElementById("qtdtaxas");
let inputTaxas = document.getElementById("taxas");//para se comunicar com as informações inseridas no campo input
let inputDescontos = document.getElementById("descontos");

let resultado = document.getElementById("resultado");

function calcular(){

    let data = inputData.value.split('-').reverse().join('/');
    let entregador = inputEntregador.options[inputEntregador.selectedIndex].text;//para puxar o valor inserido pelo usuário no campo de imput
    let entregas = Number(inputEntregas.value);
    let qtdtaxas = Number(inputQtdTaxas.value);
    let taxas = Number(inputTaxas.value);
    let descontos = Number(inputDescontos.value);

    let valorTotal = taxaEntregador(entregador) + acimaDe10(entregas, qtdtaxas) + taxas - descontos;

    resultado.innerHTML = `<p>-> O entregador <b>${entregador}</b> fez no dia <b>${data}</b>:</p>`;
    resultado.innerHTML += `<p><b>-> ${entregas}</b> entregas no total; </p>`;
    resultado.innerHTML += `<p><b>-> ${qtdtaxas}</b> entregas com taxa no valor total de <b>R$ ${taxas.toFixed(2)}; </p>`;
    resultado.innerHTML += `<p>-> Teve desconto de <b>R$ ${descontos.toFixed(2)}</b>; </p>`;
    resultado.innerHTML += `<p>-> E o valor total a pagar é de <b><br>R$ ${valorTotal.toFixed(2)}</br></p>`;
}
function taxaEntregador(entregador){
    if(entregador === 'Danilo'){
        return 70;
    } else {
        return 60;
    }
}

function acimaDe10(entregas, qtdtaxas){
    if(entregas >= 10 && entregas - qtdtaxas >= 10){
        return (entregas - 10) * 4 - (qtdtaxas * 4);}
    else {
        return taxaEntregador(entregador) - taxaEntregador(entregador);
    } 
}

