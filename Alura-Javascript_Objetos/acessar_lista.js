const cliente = {
    nome: "Andre",
    idade:36,
    cpf:"82675659",
    email:"andre@email.com"
}
                 //0       //1
const chaves = ["nome", "idade","cpf","email"]

// console.log(cliente[chaves[0]])

chaves.forEach(info=>console.log(cliente[info]))

console.log(cliente["nome"])