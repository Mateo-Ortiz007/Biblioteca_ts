interface Curso {
    titulo: string;
    instructor: string;
    duracion: number;
    mostrarCurso(): string;
    obtenerAcceso(): string;
}

interface CursoGratis extends Curso {
    precio: number;
    obtenerAcceso(): string;
}

interface CursoPago extends Curso {
    precio: number;
    obtenerAcceso(): string;
}

interface CursoPremium extends Curso {
    precio: number;
    obtenerAcceso(): string;
}

const cursoGratis: CursoGratis = {
    titulo: "Introducción a TypeScript",
    instructor: "Lucía",
    duracion: 10,
    precio: 0,
    mostrarCurso() {
        return `Curso gratis: ${this.titulo} - Instructor: ${this.instructor} - Duración: ${this.duracion} horas`;
    },
    obtenerAcceso() {
        return "Acceso básico habilitado: sólo lecciones gratuitas";
    }
};

const cursoPago: CursoPago = {
    titulo: "Fundamentos de Node.js",
    instructor: "Diego",
    duracion: 20,
    precio: 49.99,
    mostrarCurso() {
        return `Curso pago: ${this.titulo} - Instructor: ${this.instructor} - Duración: ${this.duracion} horas`;
    },
    obtenerAcceso() {
        return "Acceso estándar habilitado: contenido completo del curso";
    }
};

const cursoPremium: CursoPremium = {
    titulo: "Arquitectura de Software Avanzada",
    instructor: "Marcela",
    duracion: 40,
    precio: 129.99,
    mostrarCurso() {
        return `Curso premium: ${this.titulo} - Instructor: ${this.instructor} - Duración: ${this.duracion} horas`;
    },
    obtenerAcceso() {
        return "Acceso premium habilitado: lecciones, mentoría y recursos exclusivos";
    }
};

const cursos: Curso[] = [cursoGratis, cursoPago, cursoPremium];

for (const curso of cursos) {
    console.log(curso.mostrarCurso());
    console.log(`Precio: ${(curso as CursoGratis | CursoPago | CursoPremium).precio ?? "Gratis"}`);
    console.log(curso.obtenerAcceso());
    console.log("---");
}

