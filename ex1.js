let nums = []

for (i = 0; i < 5; i++){
    nums.push(Math.floor(Math.random() * 10))
}

function verificarMedia(){
    nums.forEach(nota => {
        if (nota >= 7){
            console.log("Aprovado 😎😎😎")
        }else{
            console.log("Reprovado 😂😂😂")
        }
    })
}

verificarMedia()