# 💌 Swipe Cards: Interfaz de Tarjetas Deslizables

Interfaz de tarjetas deslizables estilo app de citas, con arrastre fluido por mouse y touch, feedback visual de LIKE/NOPE y animaciones de salida o retorno. Construida con **HTML, CSS y JavaScript puro**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🔗 Proyecto en vivo

👉 [Ver proyecto en vivo](https://swipecardmatch.netlify.app/)

## ✨ Características

- **Arrastre de tarjetas** unificado para mouse y touch (`mousedown`/`touchstart`, `mousemove`/`touchmove`, `mouseup`/`touchend`) usando los mismos handlers.
- **Rotación proporcional** a la distancia arrastrada, simulando el efecto físico real de una tarjeta siendo deslizada.
- **Feedback visual dinámico**: las etiquetas "LIKE" y "NOPE" aparecen con una opacidad que aumenta según qué tan lejos se arrastra la tarjeta.
- **Umbral de decisión**: si se suelta la tarjeta habiendo cruzado cierta distancia, esta sale de la pantalla (`go-left`/`go-right`); si no, vuelve suavemente a su posición original (`reset`).
- Limpieza correcta de listeners y estilos inline tras cada interacción, evitando fugas de eventos o estados inconsistentes entre arrastres.
- Mensaje de "no hay más personas" que queda visible por debajo de las tarjetas gracias a `z-index: -1`.

## 🛠️ Tecnologías utilizadas

- **HTML5** — estructura de tarjetas apiladas dentro de un contenedor relativo.
- **CSS3 (anidamiento nativo)** — uso de selectores anidados (`& button`, `&.is-big`, etc.), sprites de iconos posicionados con `background-position`, y transiciones condicionadas por clase (`go-left`, `go-right`, `reset`).
- **JavaScript (Vanilla)** — cálculo de posición y rotación en tiempo real a partir de eventos de puntero, con limpieza de listeners al finalizar cada arrastre.

## 📂 Estructura del proyecto

```
├── index.html
├── style.css
├── script.js
├── photos/
│   ├── logo.webp
│   ├── icons.webp
│   └── (fotos de las tarjetas)
└── README.md
```

## 🚀 Cómo usarlo localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/carlos-daniel07/swipe-cards-match-app.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd swipe-cards-match-app
   ```
3. Abre `index.html` en tu navegador (o usa la extensión Live Server en VS Code).

## 🧠 Qué aprendí / practiqué

- Manejar arrastre (drag) unificado entre eventos de mouse y touch usando el operador `??` para leer `pageX` de la fuente correcta según el tipo de evento.
- Calcular una rotación proporcional al desplazamiento horizontal para simular físicamente el gesto de deslizar una tarjeta.
- Usar `transitionend` como punto de control para saber cuándo una animación terminó y poder limpiar estilos/estado de forma segura, evitando resetear la tarjeta a mitad de una animación.
- Trabajar con anidamiento nativo de CSS (`&`) para mantener estilos relacionados agrupados sin necesidad de un preprocesador.

## 🎓 Créditos

Este proyecto se hizo siguiendo el tutorial de **midudev**: [Cómo hacer un Tinder con HTML, CSS y JS](https://www.youtube.com/watch?v=u01WD_YNENY). El nombre y los assets de marca del video fueron reemplazados por elementos genéricos para evitar cualquier uso indebido de la marca Tinder/Match Group.

## 📸 Vista previa

<img width="1920" height="1536" alt="image" src="https://github.com/user-attachments/assets/827b7588-3591-4c5f-b6a3-2568f37ff5f6" />

## 📄 Licencia

Este proyecto es de uso libre con fines educativos y de portfolio.

---

Hecho con 💻 por [Carlos Daniel](https://github.com/carlos-daniel07)
