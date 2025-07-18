# Ciclo de Vida de un Componente en React

[Volver a Inicio](../../README.md)

> En React, el ciclo de vida de un componente se refiere a las distintas etapas por las que pasa un componente desde que se crea hasta que se elimina del DOM. Este ciclo es más visible y controlado en los componentes de clase, pero también se puede manejar fácilmente en componentes funcionales usando hooks como useEffect.

## 🔄 Etapas del ciclo de vida

- Montaje (Mounting): El componente se crea y se inserta en el DOM.
- Actualización (Updating): El componente se re-renderiza cuando cambian las props o el estado (state).
- Desmontaje (Unmounting): El componente se elimina del DOM.

<img src="../../assets/LifeCycle.png" alt="Ciclo de vida de un componente en React">

- Recordemos que un componente se Re-Renderiza al modificar su estado interno, ó al cambiar el valor de la/s prop/s que recibe.

## ⚛️ Ciclo de vida en componentes funcionales (con useEffect)

- En un componente llamado "Demo":
  - Imprime mensajes cuando se Monta, Actualiza o Desmonta.

```jsx
import { useEffect } from "react";
import GameCard from "../../components/gameCard/GameCard";

export default function Demo({ estado }) {
  // 👉 Montaje:
  useEffect(() => {
    console.log("Componente montado");
  }, []);

  // 👉 Montaje y Actualización
  useEffect(() => {
    console.log("Estado actualizado:", estado);
  }, [estado]);

  // 👉 Desmontaje:
  useEffect(() => {
    return () => {
      console.log("Componente se desmontará...");
    };
  }, []);

  return (
    <div>
      <h3>Estado desde Home: {estado}</h3>
    </div>
  );
}
```

- Otro Ejemplo, un Componente llamado "ClickCounter":
  - Al montarse se comienzan a contar los clicks sobre la ventana.
  - Al desmontarse, se desuscribe (y libera al navegador) de dicha tarea.

```jsx
import { useEffect, useState } from "react";

export default function ClickCounter() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setClicks((prev) => prev + 1);
    };
    // Escuchar clicks en todo el documento:
    window.addEventListener("click", handleClick);
    // Limpieza del listener cuando el componente se desmonta:
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <h2>Clics en la ventana: {clicks}</h2>
    </div>
  );
}
```

## StrictMode en React

> <React.StrictMode> en React es una herramienta para desarrollo que ayuda a detectar errores potenciales en tu aplicación. No afecta el comportamiento en producción y no renderiza nada en el DOM.

### ✅ ¿Qué hace?

Cuando envolvés parte de tu aplicación con <StrictMode>, React:

1. Detecta efectos secundarios inseguros (por ejemplo, en useEffect, useLayoutEffect).
2. Ejecuta dos veces ciertas funciones en modo desarrollo para ayudarte a encontrar problemas:
   - useEffect
   - useState
   - useReducer
3. Muestra advertencias sobre:
   - Usar APIs obsoletas.
   - Componentes con claves faltantes en listas.
   - Problemas con el ciclo de vida.

### 🧪 Ejemplo de uso:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 🧠 Importante

- Sólo funciona en modo desarrollo.
- No afecta el rendimiento ni cambia el comportamiento en producción.
- Ayuda a prepararte para futuras versiones de React más estrictas.

[Volver a Inicio](../../README.md)
