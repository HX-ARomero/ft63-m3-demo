# 📚 REPASO TEÓRICO | Props

[Volver a Inicio](../../README.md)

## Direccionalidad

- Los datos siguen un único orden al momento de ser transferidos entre componentes.
- COMPONENTE PADRE: este contiene y engloba a otro componente, lo retorna.
- COMPONENTE HIJO: aquel que está contenido en un padre y es devuelto por él.

## ¿Qué son las Props en REACT?

- La información se transfiere entre componentes mediante propiedades (props).
- Las propiedades son datos que guardaremos dentro de un objeto, y que lo pasaremos como un argumento.
- Permite acceder a dicha información como un argumento dentro del componente funcional a través de la propiedad dentro del objeto props.

## ¿Qué son los eventos?

- Los eventos en React son como los eventos del DOM, pero con sintaxis de JSX. Podés manejar clics, cambios de input, teclas, etc.

✅ Ejemplo básico de evento:

```jsx
export default function Boton() {
  function manejarClick() {
    alert("Hiciste click");
  }

  return <button onClick={manejarClick}>Click acá</button>;
}
```

## Props + Eventos juntos

- Un caso muy común: el padre le pasa al hijo una función como prop para manejar un evento.

<img src="../../assets/props_y_eventos.png" alt="Props y Eventos en React">

✅ Ejemplo: pasar un evento desde el padre:

```jsx
// Componente Hijo
function Boton({ onCustomClick }) {
  return <button onClick={onCustomClick}>Click desde hijo</button>;
}
```

```jsx
// Componente Padre
export default function App() {
  const manejarClick = () => {
    alert("El hijo disparó este evento");
  };

  return <Boton onCustomClick={manejarClick} />;
}
App pasa manejarClick como prop.
```

- El componente Boton lo llama cuando ocurre el onClick.

## 🧠 Resumen:

| Concepto            | Uso                                                       |
| ------------------- | --------------------------------------------------------- |
| **Props**           | Pasar datos o funciones de un componente padre a uno hijo |
| **Eventos**         | Manejar acciones del usuario como clicks, cambios, etc    |
| **Props + eventos** | Permiten que un hijo le "avise" al padre que ocurrió algo |

[Volver a Inicio](../../README.md)