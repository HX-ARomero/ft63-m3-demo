# 🟦TypeScript

[Volver a Inicio](../../README.md)

## 🎯¿Qué es TypeScript?

- TypeScript es un lenguaje de programación de código abierto fuertemente tipado que actúa como una extensión (superset) de JavaScript.
- En otras palabras, es JavaScript con esteroides.

## 🎯En TypeScript

- El tipo de dato es estático.
- Está asociado a la variable en el momento de su creación.
- No permite que sea modificado nunca más.
- El tratar de modificarlo conlleva a un error.

## 🎯Verificación en Tiempo de COMPILACIÓN

- Con TypeScript la verificación se realiza en tiempo de compilación. Nos ayuda a detectar errores mientras escribimos el código y no al ejecutarlo. Por ello, mejora el proceso de desarrollo.

## 🎯¿Por qué utilizar TypeScript?

- Nos da las mismas funcionalidades de JavaScript, pero con una capa extra de seguridad gracias a su sistema de tipado.
- Podemos supervisar la consistencia en los tipos de datos utilizados para prevenir comportamientos inesperados en el código o bugs.

## 🎯¿Qué entiende el navegador (V8)?

- HTML, CSS y JavaScript
- Características del funcionamiento de TypeScript:
  - Se TRANSPILA a JavaScript => Servidor/Navegador
  - Sólo está presente en etapa de DESARROLLO
  - Todo lo que es válido en JavaScript también lo es en TypeScript

## 🎯Instalación de TypeScript

- TypeScript puede instalarse:
  - Localmente
  - Globalmente
- Cuando ejecutamos el comando `tsc` (el compilador de TypeScript), **Node.js sigue un orden de resolución de módulos** (usa la versión instalada localmente en el proyecto, si existe):
  1.  Busca `tsc` en la carpeta `node_modules/.bin` del proyecto.
  2.  Si no lo encuentra ahí, busca en las rutas globales (`npm install -g typescript`).
  3.  Si tampoco está ahí, da error de comando no encontrado.

### Instalación GLOBAL

#### ➡️1. Instalar y Verificar Versión de TypeScript Global

- En Terminal Integrada ubicados en CARPETA "01-typescript I":

```bash
# INSTALAR EN FORMA GLOBAL:
npm install -g typescript

# CONSULTAR VERSIÓN INSTALADA GLOBALMENTE:
tsc -v    # tsc: TypeScript Compiler
# Version 5.5.4

# Obtener ayuda de TypeScript:
tsc --help
```

#### ➡️2. Verificar Dependencias Globales y Desinstalar

- En Terminal Integrada:

```bash
# Ver listado de Dependencias Globales:
npm ls -g --depth-0

# Desinstalar Dependencia Global
npm uninstall -g typescript
```

[Volver a Inicio](../../README.md)