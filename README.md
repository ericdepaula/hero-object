# Projeto Heroi

Este é um projeto simples que simula diferentes tipos de heróis e seus ataques em um cenário de batalha. O objetivo é demonstrar o uso de classes, métodos e estruturas de controle no JavaScript.

## Estrutura do Código

O código consiste em uma classe `heroi`, que permite criar um herói com três propriedades principais:

- `nome`: o nome do herói.
- `idade`: a idade do herói.
- `tipo`: o tipo de herói (guerreiro, mago, monge, ninja).

A classe possui um método `atacar()`, que executa a ação de ataque de acordo com o tipo do herói. Dependendo do tipo escolhido, o herói usará uma arma ou habilidade específica, como espada, magia, arte marcial ou shuriken.

### Tipos de Heróis

- **Guerreiro**: Ataca com uma espada 🗡.
- **Mago**: Ataca com magia elemental 🍃.
- **Monge**: Ataca com arte marcial 🥋.
- **Ninja**: Ataca com shuriken 🌟.

### Como Usar

1. Crie uma instância da classe `heroi` passando o nome, idade e tipo desejado.
2. Chame o método `atacar()` para que o herói realize seu ataque.

Exemplo:

```javascript
var meuHeroi = new heroi("Eric", 22, "ninja");
meuHeroi.atacar();  // Output: "o ninja atacou usando sua shouriken 🌟"

