class heroi{
    constructor(nome, idade, tipo, poder){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.poder = poder
    }

    attack(){
        console.log(`o ${this.tipo} atacou usando ${this.poder}`)
   }
}

let acao = new heroi("Patolino", "28", "mago", "magia")

acao.attack()