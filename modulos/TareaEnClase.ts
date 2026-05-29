

interface Libro {
    id: number;
    titulo: string;
    autor: string;
    categoria: string;
    disponible: boolean;
}

interface Usuario {
    id: number;
    nombre: string;
    cedula:number;
    correo: string;
    telefono: string;
}

interface Prestamo {
    id: number;
    libroId: number;
    usuarioId: number;
    fechaPrestamo: Date;
    fechaDevolucion?: Date | null;
}

class Biblioteca {
    private libros: Libro[] = [];
    private usuarios: Usuario[] = [];
    private prestamos: Prestamo[] = [];
    private siguientePrestamoId: number = 1;

    // Gestión de libros
    agregarLibro(libro: Libro): void {
        this.libros.push(libro);
    }

    eliminarLibro(id: number): boolean {
        const idx = this.libros.findIndex(l => l.id === id);
        if (idx === -1) return false;
        this.libros.splice(idx, 1);
        return true;
    }

    buscarLibroPorTitulo(titulo: string): Libro[] {
        const q = titulo.toLowerCase();
        return this.libros.filter(l => l.titulo.toLowerCase().includes(q));
    }

    buscarLibroPorAutor(autor: string): Libro[] {
        const q = autor.toLowerCase();
        return this.libros.filter(l => l.autor.toLowerCase().includes(q));
    }

    listarLibros(): Libro[] {
        return this.libros;
    }

    // Gestión de usuarios
    registrarUsuario(usuario: Usuario): void {
        this.usuarios.push(usuario);
    }

    buscarUsuarioPorCedula(cedula: number): Usuario | undefined {
        return this.usuarios.find(u => u.cedula === cedula);
    }

    listarUsuarios(): Usuario[] {
        return this.usuarios;
    }

    // Gestión de préstamos
    prestarLibro(libroId: number, usuarioId: number): string {
        const libro = this.libros.find(l => l.id === libroId);
        if (!libro) return `Error: libro con id ${libroId} no existe.`;
        if (!libro.disponible) return `Error: el libro "${libro.titulo}" ya está prestado.`;
        const usuario = this.usuarios.find(u => u.id === usuarioId);
        if (!usuario) return `Error: usuario con id ${usuarioId} no existe.`;

        const prestamo: Prestamo = {
            id: this.siguientePrestamoId++,
            libroId: libro.id,
            usuarioId: usuario.id,
            fechaPrestamo: new Date(),
            fechaDevolucion: null
        };
        this.prestamos.push(prestamo);
        libro.disponible = false;
        return `Préstamo registrado: ${usuario.nombre} -> ${libro.titulo} (id prestamo ${prestamo.id})`;
    }

    devolverLibro(prestamoId: number): string {
        const prestamo = this.prestamos.find(p => p.id === prestamoId);
        if (!prestamo) return `Error: préstamo con id ${prestamoId} no encontrado.`;
        if (prestamo.fechaDevolucion) return `Error: este préstamo ya fue devuelto el ${prestamo.fechaDevolucion}.`;

        const libro = this.libros.find(l => l.id === prestamo.libroId);
        if (!libro) return `Error: libro del préstamo no existe.`;

        prestamo.fechaDevolucion = new Date();
        libro.disponible = true;
        return `Devolución registrada: ${libro.titulo} (id prestamo ${prestamo.id})`;
    }

    listarPrestamos(): Prestamo[] {
        return this.prestamos;
    }
}

// Ejemplos y pruebas (Casos solicitados)
const biblio = new Biblioteca();

// Caso 1 - Registrar 5 libros y 3 usuarios
const librosIniciales: Libro[] = [
    { id: 1, titulo: "Clean Code", autor: "Robert C. Martin", categoria: "Programación", disponible: true },
    { id: 2, titulo: "The Pragmatic Programmer", autor: "Andrew Hunt", categoria: "Programación", disponible: true },
    { id: 3, titulo: "Introduction to Algorithms", autor: "Cormen", categoria: "Algoritmos", disponible: true },
    { id: 4, titulo: "Harry Potter and the Sorcerer's Stone", autor: "J.K. Rowling", categoria: "Ficción", disponible: true },
    { id: 5, titulo: "Don Quixote", autor: "Miguel de Cervantes", categoria: "Clásicos", disponible: true }
];

for (const l of librosIniciales) biblio.agregarLibro(l);

const usuariosIniciales: Usuario[] = [
    { id: 1, nombre: "María López", cedula: 123456789, correo: "maria@example.com", telefono: "555-0101" },
    { id: 2, nombre: "Carlos Pérez", cedula: 987654321, correo: "carlos@example.com", telefono: "555-0202" },
    { id: 3, nombre: "Luisa García", cedula: 456789123, correo: "luisa@example.com", telefono: "555-0303" }
];

for (const u of usuariosIniciales) biblio.registrarUsuario(u);

console.log("--- Libros registrados ---");
console.table(biblio.listarLibros());
console.log("--- Usuarios registrados ---");
console.table(biblio.listarUsuarios());

// Caso 2 - Realizar un préstamo (María López toma 'Clean Code')
const usuarioMaria = usuariosIniciales.find(u => u.nombre === "María López");
const cleanCode = librosIniciales.find(l => l.titulo === "Clean Code");
if (usuarioMaria && cleanCode) {
    console.log("--- Caso 2: préstamo válido ---");
    console.log(biblio.prestarLibro(cleanCode.id, usuarioMaria.id));
    console.log("Disponibilidad de 'Clean Code':", biblio.listarLibros().find(l => l.id === cleanCode.id)?.disponible);
}

// Caso 3 - Intentar prestar nuevamente el mismo libro
if (usuarioMaria && cleanCode) {
    console.log("--- Caso 3: intento de segundo préstamo del mismo libro ---");
    console.log(biblio.prestarLibro(cleanCode.id, usuarioMaria.id));
}

// Caso 4 - Devolución
const prestamos = biblio.listarPrestamos();
if (prestamos.length > 0) {
    const idPrestamo = prestamos[0]!.id;
    console.log("--- Caso 4: devolución ---");
    console.log(biblio.devolverLibro(idPrestamo));
    console.log("Disponibilidad de 'Clean Code' tras devolución:", biblio.listarLibros().find(l => l.titulo === "Clean Code")?.disponible);
}

// Caso 5 - Listar todos los préstamos
console.log("--- Caso 5: lista de préstamos ---");
console.table(biblio.listarPrestamos());


