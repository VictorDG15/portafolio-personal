import { Injectable } from '@angular/core';
import {
  Experience, SkillCategory, Project, Education, Certification
} from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  getPersonalInfo() {
    return {
      name: 'Víctor Yordi',
      lastName: 'Díaz Gonzales',
      title: 'Full Stack Developer',
      subtitle: 'Java · Spring Boot · Angular · Flutter',
      tagline: 'Construyo sistemas escalables que transforman ideas en productos digitales de impacto.',
      email: 'victoryorddiazgonzales@gmail.com',
      phone: '+51 902411155',
      location: 'Lima, Perú',
      linkedin: 'https://linkedin.com/in/victor-yordi-diaz-gonzales-7b6841273',
      github: 'https://github.com/victoryordi',
      whatsapp: 'https://wa.me/51902411155',
      about: `Desarrollador Full Stack con más de 3 años de experiencia construyendo soluciones web, móviles y de escritorio. Me especializo en arquitecturas de microservicios con Spring Boot, interfaces modernas con Angular y aplicaciones multiplataforma con Flutter. He trabajado en empresas líderes del sector financiero peruano como Diner's Club y Culqi, donde contribuí al desarrollo de sistemas críticos de pago y gestión. Me caracterizo por mi rápida adaptación a nuevas tecnologías, mi compromiso con el código limpio y mi orientación a resultados de alto impacto.`,
    };
  }

  getExperiences(): Experience[] {
    return [
      {
        role: 'Ingeniero Fullstack',
        company: "3420 Wealth Management",
        period: 'Jul 2025 – Actualidad',
        type: 'fullstack',
        description: [
          'Desarrollé y mantuve aplicaciones financieras utilizando Spring Boot, Symfony 7 y Angular 16.',
          'Diseñé e integré APIs REST, mejorando los tiempos de respuesta en ~25%.',
          'Migré el frontend de Angular 6 a Angular 16, reduciendo tiempos de carga en ~30%.',
          'Implementé despliegues con Docker, reduciendo tiempos de entrega en ~40%.',
          'Automaticé migraciones de base de datos usando Flyway con MySQL dockerizado.',
          'Colaboré con equipos de QA y producto bajo metodología Scrum.',
          'Apliqué principios SOLID y buenas prácticas de Clean Code para mejorar escalabilidad y mantenibilidad.'
        ],
        technologies: ['Java 17', 'Spring Boot', 'Symfony 7', 'Angular 16', 'Docker', 'MySQL', 'Flyway', 'Git', 'Scrum'],
      },
      {
        role: 'Desarrollador Fullstack',
        company: "Diners Club",
        period: 'Ene 2024 – Dic 2024',
        type: 'fullstack',
        description: [
          'Desarrollé APIs REST escalables usando Java 17/20 y Spring Boot.',
          'Optimicé consultas y rendimiento en SQL Server y AS400.',
          'Construí interfaces responsivas con Angular mejorando la experiencia del usuario.',
          'Participé en el desarrollo de aplicaciones móviles con Flutter.',
          'Trabajé en equipos ágiles utilizando Scrum y Figma para diseño UI.'
        ],
        technologies: ['Java 17', 'Spring Boot', 'Angular', 'Flutter', 'SQL Server', 'AS400', 'Git', 'Maven', 'Scrum'],
      },
      {
        role: 'Desarrollador Backend',
        company: 'CSTI – Culqi',
        period: 'Jul 2023 – Dic 2023',
        type: 'backend',
        description: [
          'Diseñé microservicios para procesamiento de pagos QR usando Spring Boot.',
          'Integré APIs externas (Niubiz) asegurando comunicación segura y eficiente.',
          'Implementé procesos batch con Spring Batch para generación de archivos transaccionales.',
          'Gestioné incidentes críticos asegurando la continuidad del sistema.',
          'Documenté procesos y gestioné tareas con Jira y Confluence.'
        ],
        technologies: ['Java', 'Spring Boot', 'Microservicios', 'Spring Batch', 'Jira', 'Confluence', 'Scrum'],
      },
      {
        role: 'Desarrollador Frontend',
        company: 'Pana Group',
        period: 'Mar 2023 – Jun 2023',
        type: 'fullstack',
        description: [
          'Desarrollé funcionalidades para sistemas de control de stock vehicular con Vue.js y Spring Boot.',
          'Apoyé en el desarrollo de aplicaciones móviles con Flutter.',
          'Integré bases de datos SQL Server asegurando consistencia de datos.',
          'Realicé pruebas funcionales para garantizar calidad del software.'
        ],
        technologies: ['Vue.js', 'Spring Boot', 'Flutter', 'SQL Server'],
      },
      {
        role: 'Desarrollador Fullstack Junior',
        company: 'Master Belle',
        period: 'Oct 2022 – Feb 2023',
        type: 'fullstack',
        description: [
          'Desarrollé interfaces web interactivas con Angular y Vue.js.',
          'Implementé APIs REST con Spring Boot y gestioné dependencias con Maven.',
          'Diseñé y optimicé consultas en bases de datos MySQL.'
        ],
        technologies: ['Angular', 'Vue.js', 'Spring Boot', 'MySQL', 'Maven'],
      },
      {
        role: 'Desarrollador Web Junior',
        company: 'Foodpack',
        period: 'May 2022 – Sep 2022',
        type: 'intern',
        description: [
          'Apoyé en el desarrollo de aplicaciones web utilizando Angular.',
          'Creé procedimientos almacenados y estructuras de base de datos en MySQL.'
        ],
        technologies: ['Angular', 'MySQL', 'HTML5', 'CSS3'],
      }
    ];
  }

  getSkillCategories(): SkillCategory[] {
    return [
      {
        category: 'Lenguajes',
        icon: 'fa-code',
        items: [
          { name: 'Java', level: 90, icon: 'fab fa-java' },
          { name: 'JavaScript', level: 85, icon: 'fab fa-js' },
          { name: 'TypeScript', level: 80, icon: 'fas fa-code' },
          { name: 'Dart (Flutter)', level: 75, icon: 'fas fa-mobile-alt' },
          { name: 'C# .NET', level: 65, icon: 'fab fa-microsoft' },
          { name: 'Python', level: 60, icon: 'fab fa-python' },
          { name: 'C++', level: 55, icon: 'fas fa-microchip' },
        ],
      },
      {
        category: 'Frameworks & Frontend',
        icon: 'fa-layer-group',
        items: [
          { name: 'Spring Boot', level: 88, icon: 'fas fa-leaf' },
          { name: 'Angular', level: 85, icon: 'fab fa-angular' },
          { name: 'Vue.js', level: 78, icon: 'fab fa-vuejs' },
          { name: 'Flutter', level: 75, icon: 'fas fa-mobile-screen' },
          { name: 'HTML5 / CSS3', level: 90, icon: 'fab fa-html5' },
        ],
      },
      {
        category: 'Bases de Datos',
        icon: 'fa-database',
        items: [
          { name: 'SQL Server', level: 85, icon: 'fas fa-database' },
          { name: 'MySQL', level: 82, icon: 'fas fa-database' },
          { name: 'AS400', level: 65, icon: 'fas fa-server' },
          { name: 'PostgreSQL', level: 60, icon: 'fas fa-database' },
        ],
      },
      {
        category: 'DevOps & Herramientas',
        icon: 'fa-tools',
        items: [
          { name: 'Git / GitHub', level: 88, icon: 'fab fa-github' },
          { name: 'Docker', level: 65, icon: 'fab fa-docker' },
          { name: 'AWS', level: 55, icon: 'fab fa-aws' },
          { name: 'Postman', level: 90, icon: 'fas fa-paper-plane' },
          { name: 'Figma', level: 75, icon: 'fab fa-figma' },
          { name: 'Jira / Scrum', level: 85, icon: 'fab fa-jira' },
        ],
      },
    ];
  }

  getProjects(): Project[] {
    return [
      {
        id: 1,
        name: 'FinPay QR Gateway',
        description: 'Sistema de pagos QR para plataforma fintech',
        longDescription: 'Microservicio backend para procesamiento de pagos QR integrado con Niubiz. Arquitectura limpia con Spring Boot, Spring Batch para reconciliación automática y manejo de transacciones críticas en tiempo real.',
        technologies: ['Java', 'Spring Boot', 'Spring Batch', 'SQL Server', 'Docker', 'REST APIs'],
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
        demoUrl: 'assets/videos/projects/finpay-qr-demo.webm',  
        demoType: 'video',
        githubUrl: 'https://github.com/VictorDG15/FinPay-/tree/feature/payments',
        featured: true,
        badge: 'Backend',
      },
      {
        id: 2,
        name: 'ClubCard Dashboard',
        description: 'Panel administrativo para tarjetas de crédito',
        longDescription: 'Dashboard Angular con interfaz responsiva para gestión de tarjetas de crédito en Diner\'s Club. Incluye módulo de reportes, historial de transacciones y administración de usuarios con autenticación JWT.',
        technologies: ['Angular 16', 'TypeScript', 'PrimeNG', 'SQL Server', 'Spring Boot'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        demoUrl: '#',
        demoType: 'link',
        githubUrl: 'https://github.com/victoryordi',
        featured: true,
        badge: 'FullStack',
      },
      {
        id: 3,
        name: 'AutoStock Mobile',
        description: 'App móvil de gestión de inventario vehicular',
        longDescription: 'Aplicación Flutter para control de stock de vehículos en tiempo real. Sincronización con backend Spring Boot, escáner QR para identificación rápida de unidades y reportes offline-first.',
        technologies: ['Flutter', 'Dart', 'Spring Boot', 'SQL Server', 'REST APIs'],
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
        demoUrl: '#',
        demoType: 'link',
        githubUrl: 'https://github.com/victoryordi',
        featured: false,
        badge: 'Mobile',
      },
      {
        id: 4,
        name: 'MicroCommerce Platform',
        description: 'Plataforma e-commerce con arquitectura de microservicios',
        longDescription: 'Sistema de comercio electrónico construido con microservicios independientes: catálogo de productos, carrito de compras, gestión de pedidos y servicio de notificaciones. Desplegado en AWS con Docker.',
        technologies: ['Java', 'Spring Boot', 'Docker', 'AWS', 'MySQL', 'Angular', 'RabbitMQ'],
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop',
        demoUrl: '#',
        demoType: 'link',
        githubUrl: 'https://github.com/victoryordi',
        featured: true,
        badge: 'FullStack',
      },
      {
        id: 5,
        name: 'DataVault Analytics',
        description: 'Sistema de reportería y análisis de datos empresariales',
        longDescription: 'Plataforma de business intelligence con dashboards interactivos en Angular. Integración con múltiples fuentes de datos (SQL Server, MySQL), generación de reportes en PDF/Excel y visualizaciones con Chart.js.',
        technologies: ['Angular', 'Spring Boot', 'SQL Server', 'Chart.js', 'JasperReports', 'Maven'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        demoUrl: '#',
        demoType: 'link',
        githubUrl: 'https://github.com/victoryordi',
        featured: false,
        badge: 'Analytics',
      },
      {
        id: 6,
        name: 'TaskFlow API',
        description: 'API REST para gestión de proyectos y tareas',
        longDescription: 'Backend robusto para sistema de gestión de tareas tipo Jira. Autenticación JWT, roles y permisos, notificaciones en tiempo real con WebSockets, integración con email SMTP y documentación Swagger.',
        technologies: ['Spring Boot', 'Java', 'JWT', 'WebSockets', 'MySQL', 'Swagger', 'Docker'],
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
        demoUrl: '#',
        demoType: 'link',
        githubUrl: 'https://github.com/victoryordi',
        featured: false,
        badge: 'Backend',
      },
    ];
  }

  getEducation(): Education[] {
    return [
      {
        institution: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
        degree: 'Ingeniería de Software',
        period: 'Marzo 2021 – Diciembre 2025',
        honors: 'Alumno destacado en el quinto superior',
        icon: 'fa-graduation-cap',
      },
    ];
  }

  getCertifications(): Certification[] {
    return [
      { title: 'Python for Everybody Specialization', issuer: 'Google / Coursera', year: '2024', icon: 'fa-python' },
      { title: 'How Google Does Machine Learning', issuer: 'Google Cloud', year: '2024', icon: 'fa-brain' },
      { title: 'Launching into Machine Learning', issuer: 'Google Cloud', year: '2024', icon: 'fa-robot' },
      { title: 'The Art and Science of Machine Learning', issuer: 'Google Cloud', year: '2024', icon: 'fa-microchip' },
      { title: 'Using Python to Access Web Data', issuer: 'Google / Coursera', year: '2024', icon: 'fa-globe' },
      { title: 'Python Data Structures', issuer: 'Google / Coursera', year: '2024', icon: 'fa-chart-bar' },
      { title: 'Operating Systems', issuer: 'Google / Coursera', year: '2023', icon: 'fa-server' },
    ];
  }
}
