//? EJERCICIO 1 ----- -----
function saludar(nombre: string): string {
  return `¡Hola, ${nombre}! ¿Cómo estás?`;
}
const mensaje = saludar("Homero");
console.log(mensaje);

// Tipado "IMPLÍCITO" en "const":
const numero = 7;
// Tipado "EXPLÍCITO" en "const":
const otroNumero: number = 9;

const nuevoMensaje: string = saludar("Marge");
console.log(nuevoMensaje);

//? EJERCICIO 2 ----- -----
function suma(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(suma(5, 3));

//? EJERCICIO 3 ----- -----
function esPar(numero: number): boolean {
  return numero % 2 === 0;
}
console.log(esPar(4));

//? EJERCICIO 4 ----- -----
function crearUsuario(nombre: string, edad: number) {
  if (edad) {
    console.log(`Usuario ${nombre} de ${edad} años de edad `);
  } else {
    console.log(`Usuario ${nombre} de edad no especificada`);
  }
}
crearUsuario("Ana", 25);

//? EJERCICIO 5 ----- -----
function obtenerLongitud(arr: string[]): number {
  return arr.length;
}
const frutas = ["manzana", "banana", "naranja"];
console.log(obtenerLongitud(frutas));

//? EJERCICIO 6 ----- -----
function mostrarInfoPersona(persona: { nombre: string; edad: number }): void {
  console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
}
// Tipado "IMPLÍCITO" en "const":
const persona1: { nombre: string; edad: number } = {
  nombre: "María",
  edad: 30,
};
mostrarInfoPersona(persona1);

//? EJERCICIO 7 ----- -----
const nuevoUsuario: any = { nombre: "Bart", edad: 10 };
// Hacer que lo siguiente detecte el error "sin modificar la línea anterior":
const usuarioTipado = nuevoUsuario as { nombre: string; edad: number };
// console.log(usuarioTipado.email.toUpperCase());

//! ----- ----- ----- ----- ----- -----
//* Better Comments

//* ENUM ----- ----- ----- -----
enum EHobbies {
  MUSICA = "Escuchar música",
  CERVEZA = "Tomar cerveza",
  EJERCICIO = "Hacer ejercicio",
  TELE = "Mirar Tele",
}

//* TIPO PERSONALIZADO ----- ----- ----- -----
type TContacto = {
  email: string;
  celular: number;
};

//* INTERFAZ ----- ----- ----- -----
interface IUsuario {
  id: number;
  nombre: string;
  hobbies: EHobbies[];
  contacto: TContacto;
}

const lenny: IUsuario = {
  id: 1,
  nombre: "Lenny",
  hobbies: [EHobbies.MUSICA, EHobbies.CERVEZA, EHobbies.EJERCICIO],
  contacto: {
    email: "lenny@mail.com",
    celular: 123456789,
  },
};
console.log(lenny);

//! DIFERENCIAS ----- ----- ----- ----- ----- -----
//* INTERFAZ ----- ----- ----- -----
interface IPersona {
  nombre: string;
  apellido: string;
}
//* Merging
interface IPersona {
  edad: number;
}
//* Extender
interface IEmpleado extends IPersona {
  cargo: string;
}

//* Intersección
const marge_2: IPersona & { domicilio: string } = {
  nombre: "Marge",
  apellido: "Bubbie",
  edad: 40,
  domicilio: "Siempreviva",
};

const homero_2: IEmpleado = {
  nombre: "Homero",
  apellido: "Simpson",
  edad: 40,
  cargo: "Jefe de Seguridad",
};

const lisa_2: Partial<IPersona> = {
  nombre: "Lisa",
};
const bart: Omit<IPersona, "edad"> = {
  nombre: "Bart",
  apellido: "Simpson",
};

//* TIPOS PERSONALIZADOS ----- ----- ----- -----
type TAnimal = {
  especie: string;
};
//* Merging NO PERMITIDO !!!
// type TAnimal = {
//   nombre: string;
// }
//* Extender
type TMascota = TAnimal & {
  nombre: string;
};

const perro: TAnimal = {
  especie: "Perro",
};
const huesos: Omit<TMascota, "nombre"> = {
  especie: "Perro",
  // nombre: "Ayudante de Santa",
};
const bolaDeNieve: Partial<TMascota> = {
  especie: "Gato",
};
const stampy: TMascota & { origen: string} = {
  especie: "Perro",
  nombre: "Stampy",
  origen: "Africa",
};

//? UNION TYPE
let variable: IEmpleado | number | undefined | null | TAnimal;

variable = 7;
variable = null;
