let productsPrices = []

for (i = 0; i < 10; i++){
    productsPrices.push(Math.floor(Math.random() * 100))
}

function adicionarProduto(){
    productsPrices.push(Math.floor(Math.random() * 100))
}

function removerProduto(){
    productsPrices.pop()
}

function calcularValor(){
    let total = 0

    productsPrices.forEach(num => {
        total += num
    })

    console.log("Quantidade de produtos:", productsPrices.length)
    console.log("Preço dos produtos:", productsPrices.join("R$ / "))
    console.log("Total: R$", total,)
}

function comprar(){
    for (i = 0; i <= Math.floor(Math.random() * 8); i++){
        removerProduto()
    }

    for (i = 0; i <= Math.floor(Math.random() * 8); i++){
        adicionarProduto()
    }

    calcularValor()
}
comprar()