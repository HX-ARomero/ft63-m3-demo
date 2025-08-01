# Interfaces y Tipos personalizados

En TypeScript, tanto las **interfaces** como los **tipos personalizados** (`type`) se utilizan para definir la forma de los objetos y otros tipos de datos. Aunque son bastante similares y a menudo intercambiables, hay algunas diferencias y casos de uso específicos para cada uno. A continuación se presenta una comparación detallada de las diferencias entre una interfaz y un tipo personalizado.

## Interfaces

1. **Sintaxis y Declaración**:
   - Se declaran usando la palabra clave `interface`.
   - Se utilizan principalmente para describir la forma de los objetos.

```ts
interface IPersona {
  nombre: string;
  apellido: string;
}
```

2. **Extensión**:
   - Las interfaces se pueden extender (heredar) mediante la palabra clave `extends`.

```ts
interface IEmpleado {
  cargo: string;
  sueldo: number;
}
```

3. **Merging**:
   - Las interfaces permiten la combinación (declaration merging). Si declaras la misma interfaz varias veces, sus propiedades se combinan.

```ts
interface IPersona {
  nombre: string;
  apellido: string;
}

interface IPersona {
  edad: number;
}
// La interfaz IPerson tiene las propiedades "nombre", "apellido" y "edad"
```

4. **Uso principal**:
   - Se utilizan preferentemente para definir la forma de los objetos y clases.
   - Son más flexibles para la extensión y reutilización.

## Tipos Personalizados (`type`)

1. **Sintaxis y Declaración**:
   - Se declaran usando la palabra clave `type`.
   - Pueden representar no solo objetos, sino también tipos primitivos, uniones, intersecciones, etc.

```ts
type TPersona = {
  nombre: string;
  apellido: string;
  edad: number;
};
```

2. **Extensión**:
   - Los tipos personalizados pueden extenderse mediante intersección (`&`), pero esto no es tan flexible como `extends` en interfaces.

```ts
type TEstudiante = TPersona & {
  carrera: string;
};
```

3. **No hay merging**:
   - A diferencia de las interfaces, los tipos personalizados no permiten el merging. Definir el mismo tipo dos veces provocará un error.
4. **Uso principal**:
   - Son más versátiles que las interfaces. Se pueden usar para definir uniones, intersecciones y otros tipos complejos.

```ts
// Intersección de tipos
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;

const person: Person = {
  name: "Alice",
  age: 30,
};
```

## Comparación

### Similitudes

- Ambos pueden definir la forma de los objetos.
- Ambos pueden ser usados para hacer que el código sea más legible y mantener la consistencia de tipos.

### Diferencias clave

- **Extensibilidad**: Las interfaces son más fáciles de extender y combinar.
- **Versatilidad**: Los tipos personalizados son más versátiles y pueden definir uniones y tipos complejos que las interfaces no pueden.
- **Declaration Merging**: Las interfaces permiten la combinación de declaraciones, mientras que los tipos personalizados no.
- **Sintaxis**: La sintaxis para definir y extender es diferente.

## Cuándo usar cada uno

En TypeScript, tanto `types` como `interfaces` son herramientas poderosas para definir formas y estructuras de datos, y aunque se pueden usar de manera intercambiable en muchos casos, hay situaciones específicas en las que uno puede ser preferido sobre el otro.

### Cuándo usar `interfaces`

1. **Extensibilidad y Declaración Merging**:
   - **Interfaces** son ideales cuando necesitas extender tipos de manera que se combinen automáticamente. Esto es útil cuando trabajas con bibliotecas que podrían añadir propiedades a tus tipos.

```ts
interface Person {
  name: string;
}
interface Person {
  age: number;
}
// La interfaz Person ahora tiene ambas propiedades: name y age const person: Person = {   name: "Alice",   age: 30 };
```

2. **Herencia y Extensión**:
   - Las **interfaces** se pueden extender de manera clara y sencilla, haciendo que sean preferidas para jerarquías de tipos complejas.

```ts
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}
const dog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
};
```

3. **Implementación de clases**:
   - Si estás definiendo un tipo que será implementado por una clase, las interfaces son la elección natural.

```ts
interface Flyable {
  fly(): void;
}
class Bird implements Flyable {
  fly() {
    console.log("Flying");
  }
}
```

### Cuándo usar `types`

1. **Tipos Complejos y Uniones**:
   - **Types** son más versátiles para definir tipos complejos, como uniones e intersecciones.

```ts
type ID = number | string;
let userId: ID;
userId = 123; // Correcto
userId = "ABC"; // Correcto
```

2. **Aliasing de Tipos**:
   - Cuando solo necesitas dar un alias a un tipo existente para mayor claridad o conveniencia.

```ts
type Point = {
  x: number;
  y: number;
};
const point: Point = {
  x: 10,
  y: 20,
};
```

3. **Uniones y Mapeo de Tipos**:
   - **Types** son preferidos cuando necesitas crear uniones o usar tipos mapeados.

```ts
type Status = "success" | "error" | "loading";
type Response<T> = {
  status: Status;
  data: T;
};
const response: Response<string> = {
  status: "success",
  data: "Hello, World!",
};
```

### Ejemplo Combinado

A continuación, un ejemplo que muestra cómo podrías usar ambos en un contexto más complejo.

#### Definir Formas de Datos con Interface

```ts
interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
  employeeId: number;
}
```

#### Definir Tipos Complejos con Type

```ts
type ContactInfo = {
  email: string;
  phone: string;
};
type EmployeeDetails = Employee & ContactInfo;
const employee: EmployeeDetails = {
  name: "John",
  age: 25,
  employeeId: 1234,
  email: "john@example.com",
  phone: "123-456-7890",
};
```

#### Definir Tipos Uniones

```ts
type Status = "active" | "inactive" | "suspended";
type EmployeeStatus = {
  status: Status;
  details: EmployeeDetails;
};
const employeeStatus: EmployeeStatus = {
  status: "active",
  details: {
    name: "John",
    age: 25,
    employeeId: 1234,
    email: "john@example.com",
    phone: "123-456-7890",
  },
};
```

## Resumen

- **Usa `interface`** cuando necesitas extensibilidad y declaración merging, o cuando defines la estructura de datos que será implementada por clases.
- **Usa `type`** cuando trabajas con tipos complejos, uniones, o cuando simplemente necesitas dar un alias a un tipo para mayor claridad.

Ambas herramientas son complementarias, y a menudo puedes elegir la que mejor se adapte a tus necesidades en un caso específico.
