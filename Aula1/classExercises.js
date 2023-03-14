"use strict";
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

  constructor(marca, modelo) {
    super(marca, modelo);
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

  set setNumeroDePortas(numeroDePortas) {
    if (this.numeroDePortas !== 4 && numeroDePortas === 4) {
      Carro.#increaseQuatroPortasQuantity(1);
    }

    if (this.numeroDePortas === 4 && numeroDePortas !== 4) {
      Carro.#increaseQuatroPortasQuantity(-1);
    }

    this.#numeroDePortas = numeroDePortas;
  }

  set setTemAC(temAC) {
    this.#temAC = temAC;
  }
}

const carro1 = new Carro("Ford", "Golf");
const carro2 = new Carro("Ford", "Golf");
const carro3 = new Carro("Ford", "Golf");
const carro4 = new Carro("Ford", "Golf");
const carro5 = new Carro("Ford", "Golf");
carro1.setNumeroDePortas = 2;
carro2.setNumeroDePortas = 4;
carro3.setNumeroDePortas = 2;
carro4.setNumeroDePortas = 4;
carro5.setNumeroDePortas = 2;

console.log(carro1, carro2, carro3, carro4, carro5);

console.log(Carro.getQuatroPortasCount);
