let nums = []

for (i = 0; i < 10; i++){
    nums.push(Math.floor(Math.random() * 10))
}

function somarNumeros(){
    let result = 0

    nums.forEach(num => {
        result += num
    })
    return result
}

console.log(somarNumeros(), "🔢🔢🔢")