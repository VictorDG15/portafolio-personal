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
      about: `Desarrollador Full Stack Junior con más de 3 años de experiencia construyendo soluciones web, móviles y de escritorio. Me especializo en arquitecturas de microservicios con Spring Boot, interfaces modernas con Angular y aplicaciones multiplataforma con Flutter. He trabajado en empresas líderes del sector financiero peruano como Diner's Club y Culqi, donde contribuí al desarrollo de sistemas críticos de pago y gestión. Me caracterizo por mi rápida adaptación a nuevas tecnologías, mi compromiso con el código limpio y mi orientación a resultados de alto impacto.`,
    };
  }

  getExperiences(): Experience[] {
    return [
      {
        role: 'Analista Programador — Backend & Full Stack',
        company: 'Grupo Coril',
        period: 'Julio 2025 – Actualidad',
        type: 'fullstack',
        description: [
          'Diseñé e implementé microservicios financieros con Java, Spring Boot y Spring WebFlux, reduciendo en promedio un 40% los tiempos de respuesta en servicios de alta concurrencia.',
          'Implementé una arquitectura event-driven con Apache Kafka, Redpanda y Redis para el procesamiento asíncrono de transacciones financieras, garantizando consistencia eventual entre microservicios.',
          'Apliqué el patrón Saga basado en coreografía para coordinar transacciones distribuidas entre servicios de pagos y auditoría, eliminando inconsistencias en flujos críticos.',
          'Ejecuté la migración completa de Angular 6 a Angular 16 con PrimeNG y Bootstrap, reduciendo un 30% la carga de renderizado y un 25% el tiempo de carga inicial.',
          'Migré una aplicación Angular Ionic a Flutter multiplataforma para Android e iOS, mejorando la mantenibilidad y la experiencia de usuario del canal móvil.',
          'Desarrollé módulos de auditoría y trazabilidad de operaciones financieras críticas, integrando logs estructurados y seguimiento de eventos mediante correlation ID.',
          'Implementé autenticación JWT y 2FA con controles de seguridad alineados con OWASP Top 10 en APIs expuestas a canales digitales.',
          'Gestioné migraciones de esquemas MySQL y PostgreSQL con Flyway, y configuré pipelines CI/CD en GitLab para despliegues automatizados en entornos DEV, QA y producción sobre Linux, NGINX y Apache.',
          'Desarrollé APIs complementarias con Symfony 7 para integrar módulos legados del sistema core financiero.',
        ],
        technologies: ['Java', 'Spring Boot', 'Spring WebFlux', 'Apache Kafka', 'Redpanda', 'Redis', 'Angular 16', 'Flutter', 'Symfony 7', 'MySQL', 'PostgreSQL', 'Flyway', 'GitLab CI/CD', 'JWT', '2FA'],
      },
      {
        role: 'FullStack Developer',
        company: "Diner's Club",
        period: 'Enero 2023 – Diciembre 2024',
        type: 'fullstack',
        description: [
          'Desarrollé y optimicé REST APIs usando Java 17, Java 20 y Spring Boot para soluciones escalables.',
          'Implementé y administré bases de datos con SQL Server y AS400, diseñando tablas y queries optimizados.',
          'Diseñé interfaces responsivas con Angular, mejorando la experiencia del cliente en plataformas financieras.',
          'Participé en el desarrollo de aplicaciones móviles con Flutter integrando funcionalidades clave.',
          'Colaboré en equipos bajo metodología Scrum usando Figma para prototipos de diseño.',
        ],
        technologies: ['Java 17', 'Spring Boot', 'Angular', 'Flutter', 'SQL Server', 'AS400', 'Git', 'Maven', 'Postman', 'Scrum'],
      },
      {
        role: 'Web Development Intern',
        company: 'Foodpack',
        period: 'Mayo 2022 – Septiembre 2022',
        type: 'intern',
        description: [
          'Participé en el desarrollo de aplicaciones web con Angular integrando frontend y backend.',
          'Contribuí en la creación de tablas, procedimientos almacenados y funciones en MySQL.',
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
          { name: 'Java', level: 90 },
          { name: 'JavaScript', level: 85 },
          { name: 'TypeScript', level: 80 },
          { name: 'Dart (Flutter)', level: 75 },
          { name: 'C# .NET', level: 65 },
          { name: 'Python', level: 60 },
          { name: 'C++', level: 55 },
        ],
      },
      {
        category: 'Frameworks & Frontend',
        icon: 'fa-layer-group',
        items: [
          { name: 'Spring Boot', level: 88 },
          { name: 'Angular', level: 85 },
          { name: 'Vue.js', level: 78 },
          { name: 'Flutter', level: 75 },
          { name: 'HTML5 / CSS3', level: 90 },
        ],
      },
      {
        category: 'Bases de Datos',
        icon: 'fa-database',
        items: [
          { name: 'SQL Server', level: 85 },
          { name: 'MySQL', level: 82 },
          { name: 'AS400', level: 65 },
          { name: 'PostgreSQL', level: 60 },
        ],
      },
      {
        category: 'DevOps & Herramientas',
        icon: 'fa-tools',
        items: [
          { name: 'Git / GitHub', level: 88 },
          { name: 'Docker', level: 65 },
          { name: 'AWS (básico)', level: 55 },
          { name: 'Postman', level: 90 },
          { name: 'Figma', level: 75 },
          { name: 'Jira / Scrum', level: 85 },
        ],
      },
    ];
  }

  getProjects(): Project[] {
    return [
      {
        id: 1,
        name: 'Digital atm backend',
        description: 'Backend para cajero digital / neobank API, diseñado para mostrar en portafolio',
        longDescription: 'Este proyecto implementa un servicio REST seguro con gestión de usuarios, cuentas, tarjetas, transacciones y auditoría',
        technologies: ['Java', 'Spring Boot', 'Spring Batch', 'SQL Server', 'Docker', 'REST APIs'],
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
        demoUrl: '#',
        githubUrl: 'https://github.com/VictorDG15/FinPay-.git',
        featured: true,
        badge: 'Backend',
      },
      {
        id: 2,
        name: 'FinCore admin panel',
        description: 'Panel administrativo para tarjetas de crédito',
        longDescription: 'Dashboard Angular con interfaz responsiva para gestión de tarjetas de crédito en Diner\'s Club. Incluye módulo de reportes, historial de transacciones y administración de usuarios con autenticación JWT.',
        technologies: ['Angular 16', 'TypeScript', 'PrimeNG', 'SQL Server', 'Spring Boot'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        demoUrl: '#',
        githubUrl: 'https://github.com/VictorDG15/FinCore-admin.git',
        featured: true,
        badge: 'FullStack',
      },
      {
        id: 3,
        name: 'SocialPhoto App',
        description: 'App móvil de red social para compartir fotos',
        longDescription: 'SocialPhoto es una aplicación móvil de red social que desarrollé con Flutter como parte de mi portafolio. El proyecto recrea los flujos principales de una plataforma social moderna: explorar publicaciones, ver historias y reels, interactuar con contenido, crear publicaciones y consultar un perfil.',
        technologies: ['Flutter', 'Dart', 'Spring Boot', 'SQL Server', 'REST APIs'],
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
        demoUrl: '#',
        githubUrl: 'https://github.com/VictorDG15/SocialPhotoApp.git',
        featured: false,
        badge: 'Mobile',
      },
      {
        id: 7,
        name: 'FinPay QR Gateway',
        description: 'Sistema de pagos QR para plataforma fintech',
        longDescription: 'Microservicio backend para procesamiento de pagos QR en una plataforma fintech. El proyecto usa Spring Boot, arquitectura limpia, JPA, H2 para sandbox local, OpenAPI/Swagger y un adaptador simulado de Niubiz para demostrar flujos de pago realistas sin depender de credenciales privadas.',
        technologies: ['Java', 'Spring Boot', 'Spring Batch', 'SQL Server', 'Docker', 'REST APIs'],
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
        demoUrl: '#',
        githubUrl: 'https://github.com/VictorDG15/FinPay-.git',
        featured: true,
        badge: 'Backend',
      },
      {
        id: 4,
        name: 'MicroCommerce Platform',
        description: 'Plataforma e-commerce con arquitectura de microservicios',
        longDescription: 'Sistema de comercio electrónico construido con microservicios independientes: catálogo de productos, carrito de compras, gestión de pedidos y servicio de notificaciones. Desplegado en AWS con Docker.',
        technologies: ['Java', 'Spring Boot', 'Docker', 'AWS', 'MySQL', 'Angular', 'RabbitMQ'],
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop',
        demoUrl: '#',
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
        githubUrl: 'https://github.com/victoryordi',
        featured: false,
        badge: 'Backend',
      }
    ];
  }

  getEducation(): Education[] {
    return [
      {
        institution: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
        degree: 'Ingeniería de Software',
        period: 'Marzo 2018 – Noviembre 2022',
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
