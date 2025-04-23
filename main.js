class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    if (
      this.tipo === "guerreiro" ||
      this.tipo === "mago" ||
      this.tipo === "monge" ||
      this.tipo === "ninja"
    ) {
      console.log("Iniciando sequencia de ataque ⚔");
    }

    switch (this.tipo) {
      case "guerreiro":
        var ataque = "espada 🗡";
        console.log(`o ${this.tipo} atacou usando sua ${ataque}`);
        break;
      case "mago":
        var ataque = "magia elemental 🍃";
        console.log(`o ${this.tipo} atacou usando sua ${ataque}`);
        break;
      case "monge":
        var ataque = "arte marcial 🥋";
        console.log(`o ${this.tipo} atacou usando sua ${ataque}`);
        break;
      case "ninja":
        var ataque = "shouriken 🌟";
        console.log(`o ${this.tipo} atacou usando sua ${ataque}`);
        break;
      default:
        console.log("Opção não disponivel, selecione outro tipo de heroí");
        break;
    }
  }
}

var meuHeroi = new heroi("Eric", 22, "ninja");

meuHeroi.atacar();
