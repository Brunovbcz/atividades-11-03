function retornarVogais(str){
    let vogais = str.split('').filter(char => 'aeiouAEIOU'.includes(char)); 
    return vogais
}

console.log(retornarVogais("Girafa"), "🦒🦒🦒")