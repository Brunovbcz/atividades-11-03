let nums = []

for (i = 0; i < 10; i++){
    nums.push(Math.floor(Math.random() * 10))
}

function verificarResto(){
    nums.forEach(num => {
        if (num %2 == 1){
            console.log("Número ímpar 🦒🦒🦒")
        }else{
            console.log("Número par 🦒🦒🦒")
        }
    })
}
verificarResto()