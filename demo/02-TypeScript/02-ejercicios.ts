//? EJERCICIO 1 ----- ----- ----- -----
//* Tipar la siguiente función:
const calculaArea = (lado1, lado2) => lado1 * lado2;

console.log(calculaArea(5, 6));

//? EJERCICIO 2 ----- ----- ----- -----
//* Tipar la siguiente función, que puede recibir 1, 2 o 3 argumentos:
const presentarUsuario = (nombre, apellido, edad) => {
  if (!apellido) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
  } else {
    console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}`);
  }
};

presentarUsuario("Homero");
// Retorno esperado: "Nombre: Homero, Edad: No especificada"
presentarUsuario("Marge", "Bubbie");
// Retorno esperado: "Nombre: Marge, Apellido: Bubbie, Edad: No especificada"
presentarUsuario("Lisa", "Simpson", "8");

// Retorno esperado: "Nombre: Lisa, Apellido: Simpson, Edad: 8"

//? EJERCICIO 3 ----- ----- ----- -----
//* Generar el Tipo Personalizado "TPersonaje":
type TPersonaje = {};

//* Extenderlo para "TEmpleado":
type TEmpleado = {};

const marge: TPersonaje = {
  nombre: "Marge",
  edad: 40,
};
console.log(marge);

const homero: TEmpleado = {
  nombre: "Homero",
  edad: 37,
  puesto: "Jefe de Seguridad",
  empleadoDelMes: true,
};
console.log(homero);

//? EJERCICIO 4 ----- ----- ----- -----
//* Generar la interfaz "IProducto":
interface IProducto {}

//* Extenderla para "IProductoElectronico" e "IProductoRopa":
interface IProductoElectronico {}
interface IProductoRopa {}

const celularCODIGO: IProductoElectronico = {
  nombre: "Smartphone",
  precio: 500,
  marca: "Samsung",
  modelo: "Galaxy S20",
};

const remeraCODIGO: IProductoRopa = {
  nombre: "Camiseta",
  precio: 20,
  talla: "M",
  color: "Azul",
};

console.log(celularCODIGO);
console.log(remeraCODIGO);

//? EJERCICIO 5 ----- ----- ----- -----
//* Crear la Interfaz "ITarea":
interface ITarea {}

//* A partir de la interfaz "ITarea" crear la interfaz "ITareaParaEntregar":
interface ITareaParaEntregar {}

const tarea: ITarea = {
  titulo: "TypeScript II",
  descripcion: "Configuración y práctica",
  completada: false,
};

const tareaParaEntregar: ITareaParaEntregar = {
  titulo: "Proyecto Integrador M3",
  completada: false,
  fechaLimite: "2024-08-30",
};

console.log(tarea);
console.log(tareaParaEntregar);

//? EJERCICIO 6 ----- ----- ----- -----
//* Imagina que estás diseñando un sistema para una escuela de música.
//* Debes modelar a los Estudiantes y los Profesores que pueden estar inscriptos en diferentes Cursos.
//* Además, un Usuario puede ser un Estudiante o un Profesor.

//* 1. Alias de tipos:
// Define un "enum" de tipo "TGeneroMusical" que represente los géneros musicales disponibles: "Rock", "Jazz", "Clásica", "Pop", "Hip-Hop":
enum TGeneroMusical {}

// Define un "alias" de tipo "TInstrumento" que represente los instrumentos que se pueden tocar: "Guitarra", "Piano", "Batería", "Saxofón", "Bajo":
type TInstrumento = null;

//* 2. Interfaces:
// Crea una interfaz "TPersona" que tenga las propiedades nombre (cadena) y edad (número):
interface TPersona {}

// Crea una interfaz "TEstudiante" que extienda de "TPersona" y añada las propiedades:
//   nivel: cadena (por ejemplo, "Principiante", "Intermedio", "Avanzado")
//   instrumentos: una lista de Instrumento[].
interface TEstudiante {}

// Crea una interfaz TProfesor que extienda de TPersona y añada las propiedades:
//   experiencia: número de años de experiencia.
//   generoEspecialidad: un valor de GeneroMusical.
interface TProfesor {}

//* 3. Intersección de tipos:
// Define un alias de tipo Usuario que puede ser un Estudiante o un Profesor:
type TUsuario = null;

//* 4. Instancias:
// Crea al menos un objeto de tipo Estudiante:
const lisa: TEstudiante = {};

// Crea al menos un objeto de tipo Profesor:
const largo: TProfesor = {};

// Crea una función mostrarUsuario(usuario: Usuario) que acepte un Usuario e imprima información relevante según sea Estudiante o Profesor:
function mostrarUsuario(usuario: TUsuario) {}

mostrarUsuario(lisa);
mostrarUsuario(largo);
