# 📚 Use Strict en JavaScript (Modo Estricto)

[Volver a Inicio](../../README.md)

- Llega en ECMAScript 5 (2009).
- En JavaScript, `"use strict"` es una directiva que activa el "modo estricto". Este modo introduce cambios y restricciones al lenguaje para ayudar a escribir código más seguro y robusto. Algunas de las características principales de "use strict" son:
  1.  **Elimina algunos errores silenciosos**: Al convertirlos en errores explícitos, facilita la detección y corrección.
  2.  **Previene el uso de variables globales**: Obliga a declarar todas las variables antes de usarlas.
  3.  **Restringe el uso de ciertas palabras clave**: Reserva palabras que podrían ser usadas en futuras versiones de JavaScript.
  4.  **Mejora el rendimiento**: Algunos motores de JavaScript optimizan el código en modo estricto.

## 🛠️EJEMPLOS | Use Strict en JavaScript

- Los siguientes casos dan ERROR (en tiempo de compilación o ejecución) si se encuentra el modo estricto activado.

```js
"use strict";

// ----- EN TIEMPO DE EJECUCIÓN -----

// VARIABLES NO DECLARADAS:
x = 3.14;
// ❌ ReferenceError: x is not defined

// DUPLICAR NOMBRE DE PARÁMETROS:
function sumar(a, a) {
  return a + a;
}
// ❌ Error: Duplicate parameter name not allowed in this context

// ----- EN TIEMPO DE COMPILACIÓN -----

// ASIGNAR A "arguments":
let arguments = [];
// ❌ Error: Assignment to arguments is not allowed in strict mode

// ELIMINAR VARIABLES Y FUNCIONES:
let mensaje = "Hola";
delete mensaje;
// ❌ Error: Delete of an unqualified identifier in strict mode.
```

[Volver a Inicio](../../README.md)