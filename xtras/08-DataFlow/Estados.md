# 📚 REPASO TEÓRICO | Estados

[Volver a Inicio](../../README.md)

## Estado interno en React
- Objeto que permite almacenar y gestionar información en el componente.
- Al actualizar el estado de un componente, el mismo se re-renderiza.

### Hooks
- Funciones especiales que permiten que un componente utilice las características de React. Simplifican distintas funciones específicas.
- Siempre empleados dentro de un componente.
- Podremos encontrarlos en otras librerías.
- Podremos crear hooks personalizados.
- Hooks predefinidos que poseen una funcionalidad específica según la necesidad de tu proyecto:
  - useState, useEffect, useContext, useMemo, useReducer, etc.

### useState
- Genera un estado dentro de un componente. Crea automáticamente un objeto en el que podremos almacenar información para luego acceder a ella.
- Usa la variable de estado donde se necesite acceder o mostrar el valor actual del estado.
- La función de useState actualiza el valor del estado.
- Es la única función que permite cambiar el valor del estado.

## Un ejemplo de Contador: Variable Vs Estado

```js
import { useState } from "react";
/* VARIABLE: */
let contadorVariable = 0;

export default function Contador() {
	/* VARIABLE: */
	const sumarVariable = () => {
		contadorVariable++;
		console.log("Variable: ", contadorVariable);
	};
	/* ESTADO: */
	const [contadorEstado, setContadorEstado] = useState(0);
	const sumarEstado = () => {
		setContadorEstado((contadorEstado) => contadorEstado + 1);
	};
	
	return (
		<div>
			<h1>Mis Reservas</h1>
			{/* VARIABLE: */}
			<h3>Contador Variable: {contadorVariable}</h3>
			<button onClick={sumarVariable}>Sumar Variable</button>
			{/* ESTADO: */}
			<h3>Contador Estado: {contadorEstado}</h3>
			<button onClick={sumarEstado}>Sumar Estado</button>
		</div>
	);
}
```

[Volver a Inicio](../../README.md)
