interface Animal {
    nombre: string;
    edad: number;
    comer(): string;
    hacerSonido(): string;
}

class Perro implements Animal {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    comer(): string {
        return `${this.nombre} está comiendo croquetas.`;
    }

    hacerSonido(): string {
        return `${this.nombre} dice: ¡Guau guau!`;
    }
}

class Gato implements Animal {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    comer(): string {
        return `${this.nombre} está comiendo pescado.`;
    }

    hacerSonido(): string {
        return `${this.nombre} dice: ¡Miau miau!`;
    }
}

class Leon implements Animal {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    comer(): string {
        return `${this.nombre} está comiendo carne fresca.`;
    }

    hacerSonido(): string {
        return `${this.nombre} ruge: ¡Grrrrr!`;
    }
}

class Elefante implements Animal {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    comer(): string {
        return `${this.nombre} está comiendo hojas y frutas.`;
    }

    hacerSonido(): string {
        return `${this.nombre} barrita: ¡Prrrhh!`;
    }
}

const perro = new Perro("Rex", 4);
const gato = new Gato("Luna", 3);
const leon = new Leon("Simba", 6);
const elefante = new Elefante("Dumbo", 10);

const animales: Animal[] = [perro, gato, leon, elefante];

for (const animal of animales) {
    console.log(`Animal: ${animal.nombre} - Edad: ${animal.edad}`);
    console.log(animal.comer());
    console.log(animal.hacerSonido());
    console.log("---");
}
