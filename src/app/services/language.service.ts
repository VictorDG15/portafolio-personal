import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Translations {
    [key: string]: string | any;
}

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private _currentLang = new BehaviorSubject<'en' | 'es'>('es');
    currentLang$ = this._currentLang.asObservable();

    private translations: { [key: string]: Translations } = {
        es: {
            NAVBAR: {
                INICIO: 'Inicio',
                ABOUT: 'Sobre mí',
                EXPERIENCE: 'Experiencia',
                SKILLS: 'Skills',
                PROJECTS: 'Proyectos',
                EDUCATION: 'Educación',
                CONTACT: 'Contacto',
                DOWNLOAD_CV: 'Descargar CV',
                HIRE_ME: 'Contrátame'
            },
            HERO: {
                HI: 'Hola, soy',
                ROLE: 'Desarrollador Full Stack',
                DESC: 'Especializado en construir aplicaciones web excepcionales y escalables, combinando diseño moderno con un rendimiento robusto.',
                PROJECTS_BTN: 'Ver Proyectos',
                CONTACT_BTN: 'Contactar'
            },
            PROJECTS: {
                TITLE: 'Mis',
                SPAN: 'Proyectos',
                SUB_TITLE: '// Portfolio',
                FILTERS: { ALL: 'Todos' },
                DEMO: 'Demo',
                CODE: 'Código',
                MORE: 'Ver más en GitHub'
            }
        },
        en: {
            NAVBAR: {
                INICIO: 'Home',
                ABOUT: 'About',
                EXPERIENCE: 'Experience',
                SKILLS: 'Skills',
                PROJECTS: 'Projects',
                EDUCATION: 'Education',
                CONTACT: 'Contact',
                DOWNLOAD_CV: 'Download CV',
                HIRE_ME: 'Hire Me'
            },
            HERO: {
                HI: 'Hello, I am',
                ROLE: 'Full Stack Developer',
                DESC: 'Specializing in building exceptional and scalable digital experiences, combining modern design with robust performance.',
                PROJECTS_BTN: 'View Projects',
                CONTACT_BTN: 'Contact Me'
            },
            PROJECTS: {
                TITLE: 'My',
                SPAN: 'Projects',
                SUB_TITLE: '// Portfolio',
                FILTERS: { ALL: 'All' },
                DEMO: 'Demo',
                CODE: 'Code',
                MORE: 'See more on GitHub'
            }
        }
    };

    constructor() {
        const savedLang = localStorage.getItem('lang') as 'en' | 'es';
        if (savedLang) {
            this._currentLang.next(savedLang);
        }
    }

    toggleLanguage() {
        const nextLang = this._currentLang.value === 'es' ? 'en' : 'es';
        this._currentLang.next(nextLang);
        localStorage.setItem('lang', nextLang);
    }

    getLang() {
        return this._currentLang.value;
    }

    get currentLang() {
        return this._currentLang.value;
    }

    get t() {
        return this.translations[this.currentLang];
    }
}
