let somaTotal = 0;
//como os valores da função são limpar são os valores default
//a função está sendo chamada aqui sem a necessidade do onclick
//para que página inicie com esses valores
limpar();

function adicionar() {
    //recuperado valor do produto com o nome e preço
    let produto = document.getElementById('produto').value;
    //usado o split para separa o preço e produto no caracter - 
    //e pegado a primeira posição que é o nome do produto
    let nomeDoProduto = produto.split('-')[0]; 
    //usando também o split dessa vez para pegar o preço
    //e inserido o split dentro do parseInt para transformar
    //o número que é um texto em um número calculável
    let valorDoProduto = parseInt(produto.split('R$')[1]);
    //calculado o subtotal de cada produto
    let quantidadeDoProduto = document.getElementById('quantidade').value;
    let valorDoSubtotal = valorDoProduto * quantidadeDoProduto;
    //calculado o valor total
    somaTotal = somaTotal + valorDoSubtotal;
    //imprimido a lista de produtos na tela
    let listaDeProdutos = document.getElementById('lista-produtos');
    listaDeProdutos.innerHTML = listaDeProdutos.innerHTML + 
    `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidadeDoProduto}x</span> 
    ${nomeDoProduto} <span class="texto-azul">R$${valorDoSubtotal}</span> </section>`;
    //imprimido o valor total na tela
    valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$${somaTotal}`;
    //vendo a diferença entre as propriedades
    console.log(listaDeProdutos.innerHTML);
    console.log(listaDeProdutos.textContent);
    //zerando a quantidade para o próximo produto
    document.getElementById('quantidade').value = 1;
}

function limpar() {
    document.getElementById('quantidade').value = 1;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
    somaTotal = 0;
}