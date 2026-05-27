interface CuentaBancaria {
    titular: string;
    saldo: number;
    depositar(monto: number): string;
    retirar(monto: number): string;
    calcularInteres(): number;
}

class CuentaAhorros implements CuentaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(monto: number): string {
        this.saldo += monto;
        return `Depósito de ${monto} realizado. Saldo actual: ${this.saldo}`;
    }

    retirar(monto: number): string {
        if (monto > this.saldo) {
            return `Retiro insuficiente: no hay suficiente saldo (${this.saldo})`;
        }
        this.saldo -= monto;
        return `Retiro de ${monto} realizado. Saldo actual: ${this.saldo}`;
    }

    calcularInteres(): number {
        return this.saldo * 0.04;
    }
}

class CuentaCorriente implements CuentaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(monto: number): string {
        this.saldo += monto;
        return `Depósito de ${monto} realizado. Saldo actual: ${this.saldo}`;
    }

    retirar(monto: number): string {
        if (monto > this.saldo) {
            return `Retiro insuficiente: no hay suficiente saldo (${this.saldo})`;
        }
        this.saldo -= monto;
        return `Retiro de ${monto} realizado. Saldo actual: ${this.saldo}`;
    }

    calcularInteres(): number {
        return this.saldo * 0.01;
    }
}

class CuentaEmpresarial implements CuentaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(monto: number): string {
        this.saldo += monto;
        return `Depósito de ${monto} realizado. Saldo actual: ${this.saldo}`;
    }

    retirar(monto: number): string {
        if (monto > this.saldo) {
            return `Retiro insuficiente: no hay suficiente saldo (${this.saldo})`;
        }
        this.saldo -= monto;
        return `Retiro de ${monto} realizado. Saldo actual: ${this.saldo}`;
    }

    calcularInteres(): number {
        return this.saldo * 0.025;
    }
}

const cuentaAhorros = new CuentaAhorros("Alejandro", 3500);
const cuentaCorriente = new CuentaCorriente("Beatriz", 1800);
const cuentaEmpresarial = new CuentaEmpresarial("Comercial S.A.", 12000);

const cuentas: CuentaBancaria[] = [cuentaAhorros, cuentaCorriente, cuentaEmpresarial];

for (const cuenta of cuentas) {
    console.log(`Titular: ${cuenta.titular}`);
    console.log(`Saldo inicial: ${cuenta.saldo}`);
    console.log(cuenta.depositar(500));
    console.log(cuenta.retirar(2000));
    console.log(`Interés calculado: ${cuenta.calcularInteres()}`);
    console.log("---");
}

console.log(`Intento de retiro con saldo insuficiente: ${cuentaAhorros.retirar(10000)}`);

