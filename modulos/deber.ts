interface Vehiculo {
    marca: string;
    modelo: string;
    año: number;
    encender(): string;
    mover(): string;
}

interface Auto extends Vehiculo {
    mover(): string;
}

interface Moto extends Vehiculo {
    mover(): string;
}

interface Camion extends Vehiculo {
    mover(): string;
}

const auto: Auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2024,
    encender() {
        return "El auto está encendido";
    },
    mover() {
        return "El auto se mueve por la carretera";
    }
};

const moto: Moto = {
    marca: "Honda",
    modelo: "CB500",
    año: 2023,
    encender() {
        return "La moto está encendida";
    },
    mover() {
        return "La moto avanza rápidamente";
    }
};

const camion: Camion = {
    marca: "Volvo",
    modelo: "FH16",
    año: 2022,
    encender() {
        return "El camión está encendido";
    },
    mover() {
        return "El camión transporta carga pesada";
    }
};

console.log(auto.encender());
console.log(auto.mover());

console.log(moto.encender());
console.log(moto.mover());

console.log(camion.encender());
console.log(camion.mover());
