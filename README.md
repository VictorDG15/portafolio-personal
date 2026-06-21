# Yordi Portfolio — Angular 16

Portafolio profesional de **Víctor Yordi Díaz Gonzales** — Full Stack Developer.

## ✨ Stack

- **Angular 16** con TypeScript
- **PrimeNG 16** (componentes UI)
- **SCSS** con design system personalizado (variables CSS, glassmorphism, dark theme)
- **Font Awesome 6** para iconografía
- **Google Fonts**: Syne + Space Mono + Inter

## Características de diseño

- 🌑 Dark theme (negro profundo + cyan eléctrico)
- 💎 Glassmorphism cards con backdrop-filter
- ✨ Typing effect animado en el Hero
- 📊 Barras de habilidades con animación al hacer scroll
- 🗂️ Experiencia laboral con pestañas interactivas
- 🎴 Grid de proyectos con filtros por tipo
- 📱 Responsive (mobile-first)
- 🔍 Scroll suave + animaciones AOS (IntersectionObserver)

---

## 🛠️ Instalación y ejecución

### Prerrequisitos
- **Node.js** v18.x o superior  
- **npm** v9.x o superior  
- **Angular CLI** v16

### Pasos

```bash
# 1. Instalar Angular CLI globalmente (si no lo tienes)
npm install -g @angular/cli@16

# 2. Entrar al proyecto
cd portfolio

# 3. Instalar dependencias
npm install

# 4. Ejecutar en modo desarrollo
ng serve

# 5. Abrir en el navegador
# http://localhost:4200
```

### Compilar para producción

```bash
ng build --configuration production
# Output en: dist/yordi-portfolio/
```

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          ← Barra de navegación fija
│   │   ├── hero/            ← Sección principal con typing effect
│   │   ├── about/           ← Sobre mí
│   │   ├── experience/      ← Timeline de experiencia (tab layout)
│   │   ├── skills/          ← Habilidades con barras animadas
│   │   ├── projects/        ← Grid de proyectos filtrable
│   │   ├── education/       ← Educación y certificaciones
│   │   ├── contact/         ← Formulario de contacto
│   │   └── footer/          ← Footer con redes sociales
│   ├── models/
│   │   └── portfolio.model.ts   ← Interfaces TypeScript
│   ├── services/
│   │   ├── portfolio.service.ts      ← Datos del CV
│   │   └── scroll-animation.service.ts ← Animaciones AOS
│   ├── app.module.ts
│   └── app.component.ts
├── styles.scss              ← Design system global
└── index.html               ← HTML base con meta SEO
```

---

## Personalización

### Cambiar datos personales
Edita `src/app/services/portfolio.service.ts` y modifica:
- `getPersonalInfo()` — nombre, email, LinkedIn, descripción
- `getExperiences()` — historial laboral
- `getSkillCategories()` — habilidades y niveles
- `getProjects()` — proyectos del portafolio
- `getEducation()` — formación académica
- `getCertifications()` — certificaciones

### Cambiar colores del tema
Edita las variables en `src/styles.scss`:
```scss
:root {
  --accent:      #00d4ff;  /* Color principal (cyan) */
  --accent-2:    #7c3aed;  /* Color secundario (violeta) */
  --bg-primary:  #040a14;  /* Fondo principal */
}
```

---

## 📞 Contacto

- **Email:** victoryorddiazgonzales@gmail.com
- **WhatsApp:** +51 902 411 155
- **LinkedIn:** [Victor Yordi Díaz Gonzales](https://linkedin.com/in/victor-yordi-diaz-gonzales-7b6841273)

---

*© 2025 Víctor Yordi Díaz Gonzales — Hecho con ♥ en Lima, Perú 🇵🇪*
