class Hero{
    
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    atacar () {
        let tipoDeAtaque;
        switch (this.tipo) {
            case "mago":
                tipoDeAtaque = "magia";           
                break;
            case "guerreiro":
                tipoDeAtaque = "espada";
                break
            case "monge":
                tipoDeAtaque = "artes marciais";
                break
            case "ninja":
                tipoDeAtaque = "shuriken";
                break        
            default:
                console.log("Opção inválida!")
                break;
        }

        console.log(`O ${this.nome} atacou usando ${tipoDeAtaque}`);
    }
}

let heroOne = new Hero("Mago Elétrico", 1500, "mago");
let heroTwo = new Hero("One Piece", 45, "guerreiro");
let heroThree = new Hero("Benkei", 75, "monge");
let heroFour = new Hero("Hattori Hanzo", 90, "ninja");

heroOne.atacar();
heroTwo.atacar();
heroThree.atacar();
heroFour.atacar();
