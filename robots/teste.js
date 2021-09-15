const readline = require("readline-sync")
const conteudo = teste()

function teste() {
    return readline.question("Digite:")
} 

console.log(conteudo)