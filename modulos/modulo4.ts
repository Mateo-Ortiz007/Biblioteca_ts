interface Empleado {
    nombre: string;
    salarioBase: number;
    mostrarInformacion(): string;
    calcularSalario(): number;
}

interface Desarrollador extends Empleado {
    calcularSalario(): number;
}

interface Diseñador extends Empleado {
    calcularSalario(): number;
}

interface Gerente extends Empleado {
    calcularSalario(): number;
}

const desarrollador: Desarrollador = {
    nombre: "Ana",
    salarioBase: 3000,
    mostrarInformacion() {
        return `Desarrollador: ${this.nombre}, salario base: ${this.salarioBase}`;
    },
    calcularSalario() {
        const bono = 1000;
        return this.salarioBase + bono;
    }
};

const disenador: Diseñador = {
    nombre: "Carlos",
    salarioBase: 2800,
    mostrarInformacion() {
        return `Diseñador: ${this.nombre}, salario base: ${this.salarioBase}`;
    },
    calcularSalario() {
        const bono = 800;
        return this.salarioBase + bono;
    }
};

const gerente: Gerente = {
    nombre: "María",
    salarioBase: 5000,
    mostrarInformacion() {
        return `Gerente: ${this.nombre}, salario base: ${this.salarioBase}`;
    },
    calcularSalario() {
        const bono = 1500;
        return this.salarioBase + bono;
    }
};

const empleados: Empleado[] = [desarrollador, disenador, gerente];

for (const empleado of empleados) {
    console.log(empleado.mostrarInformacion());
    console.log(`Salario calculado: ${empleado.calcularSalario()}`);
    console.log("---");
}

