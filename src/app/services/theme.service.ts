import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private isLightMode = false;

    constructor() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            this.isLightMode = true;
            document.body.classList.add('light-theme');
        }
    }

    toggleTheme() {
        this.isLightMode = !this.isLightMode;
        if (this.isLightMode) {
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        }
    }

    get isLight() {
        return this.isLightMode;
    }
}
