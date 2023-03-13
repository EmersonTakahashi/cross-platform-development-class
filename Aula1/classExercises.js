class Vehicle {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
}

class Carro extends Vehicle {
  #numeroDePortas = 0;
  #temAC = false;
  static #quatroPortasCount = 0;

  constructor(marca, modelo, numeroDePortas = 2, temAC = false) {
    super(marca, modelo);
    this.#setNumeroDePortas = numeroDePortas;
    this.#temAC = temAC;
  }

  static get getQuatroPortasCount() {
    return this.#quatroPortasCount;
  }

  static #increaseQuatroPortasQuantity(increaseQuantity) {
    this.#quatroPortasCount += increaseQuantity;
  }

  get getNumeroDePortas() {
    return this.#numeroDePortas;
  }

  get getTemAC() {
    return this.#temAC;
  }

  set #setNumeroDePortas(numeroDePortas) {
    if (numeroDePortas === 4) {
      Carro.#increaseQuatroPortasQuantity(1);
    }

    this.#numeroDePortas = numeroDePortas;
  }

  set #setTemAC(temAC) {
    this.#temAC = temAC;
  }
}

const carro1 = new Carro("Ford", "Golf", 2, true);
const carro2 = new Carro("Ford", "Golf", 4, true);
const carro3 = new Carro("Ford", "Golf", 4, false);
const carro4 = new Carro("Ford", "Golf", 4, false);
const carro5 = new Carro("Ford", "Golf", 2, true);
console.log(carro1, carro2, carro3, carro4, carro5);

console.log(Carro.getQuatroPortasCount);
