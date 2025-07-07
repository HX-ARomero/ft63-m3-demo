# MarkDown

[Volver a Inicio](../README.md)

# 📘 Guía completa de Markdown

> Markdown es un lenguaje de marcado ligero que permite escribir texto con formato utilizando una sintaxis sencilla. Es ampliamente usado en documentación, GitHub, blogs, etc.

Resumen completo y práctico de las principales características del lenguaje Markdown, ideal para usar como guía o referencia rápida.

---

## 🔠 Encabezados

Se usan signos `#` para representar niveles de título:

# Título nivel 1

## Título nivel 2

### Título nivel 3

#### Título nivel 4

##### Título nivel 5

###### Título nivel 6

## 📝 Estilos de texto

_Texto en cursiva_ → _Texto en cursiva_
**Texto en negrita** → **Texto en negrita**
**_Negrita y cursiva_** → **_Negrita y cursiva_**
~~Texto tachado~~ → ~~Texto tachado~~
`Texto en código` → `Texto en código`

## 📌 Listas

Lista desordenada:

- Elemento 1
- Elemento 2
  - Sub-elemento

* También se puede usar asterisco
  Lista ordenada:

1. Primer ítem
2. Segundo ítem
   1. Sub-ítem
   2. Otro sub-ítem

## 🔗 Enlaces

A url:

[Texto visible](https://example.com)

A otro archivo .md (mediante el path relativo):

[Texto visible](../README.md)

También puedes usar:

<https://example.com>

## 🖼️ Imágenes

![Texto alternativo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-iaCGMA8pudQ6rgLxYjSk3beU9LQ58vVRXQ&s)

También puedes usar (e incluso agregar CSS!!!):

<img src="https://i.pinimg.com/564x/62/ca/5b/62ca5bc6fcabb62b5339a98545798e6d.jpg" style="width: 300px" alt="Imagen">

## 📋 Citas

> Esto es una cita.
>
> > Cita anidada.

## 📎 Código y bloques de código

Código en línea:

`console.log("Hola mundo");`

Bloque de código:

` (usando tres backticks ```) `

```js
function saludar() {
  console.log("Hola mundo");
}
```

---

## 📊 Tablas

Obsidian y otras herramientas las generan automáticamente.

| Nombre  | Edad | Ciudad       |
| ------- | ---- | ------------ |
| Ariel   | 30   | Córdoba      |
| Julieta | 28   | Buenos Aires |

## ✅ Checklists

- [x] Tarea completada
- [ ] Tarea pendiente

## 📎 Separadores

---

## 🔡 HTML en Markdown

Se puede incrustar HTML directamente:

<b>Texto en negrita con HTML</b>
<br>

<details>
  <summary>Ver más</summary>
  Texto oculto
</details>

## 🎓 Consejos

Puedes utilizar previsualización para revisar el formato (Obsidian, VSC y otras herramientas la tienen).

Markdown puede variar ligeramente según la plataforma (GitHub, VS Code, Navegador, etc.).

## 📚 Recursos

- [Guía oficial de Markdown](https://www.markdownguide.org/)
- [Guía de GitHub Flavored Markdown (GFM)](https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

---

[Volver a Inicio](../README.md)
