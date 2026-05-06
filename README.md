# Jose Sanchez Munoz - QA Tester Portfolio

Portfolio web personal enfocado en Quality Assurance.

El sitio esta construido como una página estática con HTML, CSS y JavaScript. 

## Vista general

- Presentación profesional como QA Tester.
- Secciones de experiencia, habilidades, proyectos, certificaciones y contacto.
- Soporte de idioma ES/EN.
- Tema claro/oscuro con preferencia guardada en `localStorage`.
- Navegación responsive para desktop y mobile.
- Contenido renderizado desde datos estructurados en JavaScript.

## Estructura del proyecto

```text
.
|-- assets/
|   |-- icons/              # Iconos de herramientas y tecnologias
|   `-- img/                # Imagenes del portfolio y proyectos
|-- css/
|   |-- main.css            # Entrada principal de estilos
|   |-- variables.css       # Tokens: colores, radios, sombras y medidas
|   |-- base.css            # Reset basico y estilos globales
|   |-- layout.css          # Header, navegacion, secciones y footer
|   |-- components.css      # Botones, tarjetas, tooltips, carrusel y bloques UI
|   |-- sections.css        # Estilos especificos por seccion
|   `-- responsive.css      # Adaptaciones para tablet y mobile
|-- js/
|   |-- main.js             # Punto de entrada de la aplicacion
|   |-- app/                # Orquestacion de idioma, tema e i18n
|   |-- config/             # Constantes compartidas
|   |-- data/               # Traducciones y contenido estructurado
|   |-- ui/                 # Renderizadores y comportamiento de interfaz
|   `-- utils/              # Helpers reutilizables
|-- index.html              # Documento principal
`-- README.md
```

## Organización de JavaScript

El JavaScript esta dividido por responsabilidad:

- `js/main.js`: inicializa preferencias, traducciones y navegación.
- `js/app/preferences.js`: gestiona idioma, tema y persistencia en `localStorage`.
- `js/app/i18n.js`: aplica traducciones y renderiza el contenido dinámico.
- `js/data/translations.js`: contiene textos, experiencia, habilidades, proyectos y certificaciones.
- `js/ui/renderers.js`: crea las tarjetas y listas visibles en la pagina.
- `js/ui/navigation.js`: controla menú mobile y scroll interno.
- `js/ui/theme.js`: aplica tema claro/oscuro.
- `js/ui/carousel.js`: prepara carruseles de proyectos.
- `js/config/storage-keys.js`: centraliza las claves de almacenamiento.
- `js/utils/object.js`: helpers generales sin dependencia del DOM.

## Organización de CSS

Los estilos siguen una separación por capas:

- `variables.css` define tokens reutilizables.
- `base.css` contiene estilos globales.
- `layout.css` define la estructura principal.
- `components.css` agrupa piezas reutilizables de interfaz.
- `sections.css` ajusta bloques específicos del portfolio.
- `responsive.css` contiene los cambios para pantallas medianas y pequeñas.


## Despliegue

Este proyecto esta preparado para GitHub Pages en [DEMO](https://josesanchezmunoz.github.io/) 

