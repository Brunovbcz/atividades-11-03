let nums = []
const MAX_NUM = 100

for (i = 0; i < 10; i++){
    nums.push(Math.floor(Math.random() * MAX_NUM))
}

function retornarMenorNum(array){
    let menorNum = MAX_NUM

    array.forEach(num => {
        if (num < menorNum){
            menorNum = num
        }
    })

    return menorNum
}

console.log("Menor número:", retornarMenorNum(nums), "🔢🔢🔢")