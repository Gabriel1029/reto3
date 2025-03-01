# Elección de Tecnología: Un Juego de Aprendizaje

Este proyecto es parte de un reto de programación que simula un juego interactivo donde los usuarios eligen su camino en el desarrollo web.

## Descripción

El objetivo principal es permitir a los usuarios tomar decisiones sobre su aprendizaje en programación, eligiendo entre diferentes áreas y tecnologías. El "juego" guía al usuario a través de elecciones, desde la selección del área (Front-end o Back-end) hasta la especialización en tecnologías específicas o la búsqueda de un camino como desarrollador Fullstack.

## Características

* **Elección de Área:** Los usuarios pueden elegir entre Front-end y Back-end.
* **Selección de Tecnología:** Dependiendo del área, los usuarios pueden elegir entre tecnologías populares como React o Vue (Front-end) y C# o Java (Back-end).
* **Especialización o Fullstack:** Los usuarios pueden decidir si quieren especializarse en una tecnología o convertirse en Fullstack.
* **Tecnologías Adicionales:** Los usuarios pueden ingresar tantas tecnologías adicionales como deseen para aprender.
* **Interfaz Interactiva:** La aplicación utiliza `prompt()` para la interacción con el usuario y muestra los resultados en la página HTML.

## Cómo Usarlo

1.  Clona este repositorio.
2.  Abre el archivo `index.html` en tu navegador.
3.  Sigue las instrucciones que aparecen en los `prompt()` para tomar decisiones sobre tu camino de aprendizaje.
4.  Las tecnologías adicionales que elijas se mostrarán en la página HTML.

## Estructura del Proyecto

* `index.html`: El archivo HTML principal que contiene la estructura de la página.
* `script.js`: El archivo JavaScript que contiene la lógica del "juego".

## Explicación del Código

### Variables Principales

* `tecnologia`: Almacena la tecnología principal elegida por el usuario.
* `opcionUno`: Almacena la decisión del usuario sobre especialización o Fullstack.
* `opcionDos`: Un array que almacena las tecnologías adicionales elegidas por el usuario.
* `area`: Almacena el área elegida por el usuario (Front-end o Back-end).
* `tecnologiasDiv`: Referencia al elemento HTML donde se muestran las tecnologías adicionales.

### Lógica Principal

1.  Se utiliza un bucle `while` para controlar el flujo del "juego".
2.  Se utiliza `prompt()` para obtener las elecciones del usuario.
3.  Se utilizan estructuras `if...else if...else` para manejar las diferentes elecciones del usuario.
4.  Se utiliza otro bucle `while` para permitir al usuario ingresar múltiples tecnologías adicionales.
5.  Las tecnologías adicionales se agregan al `tecnologiasDiv` en la página HTML.
6.  Los mensajes principales se muestran usando `alert()`.

### Tecnologías Utilizadas

* JavaScript
* HTML

## Autor

Tu Nombre

## Licencia

Este proyecto está bajo la licencia MIT.

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún problema o tienes alguna sugerencia, por favor, abre un issue o envía un pull request.
