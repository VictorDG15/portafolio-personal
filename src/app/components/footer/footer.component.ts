import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
<footer class="footer">
  <div class="footer-line"></div>
  <div class="container">
    <div class="footer-content">
      <div class="footer-brand">
        <span class="logo-bracket">&lt;</span>
        <span class="logo-name">YordiDev</span>
        <span class="logo-bracket">/&gt;</span>
      </div>
      <p class="footer-quote">
        "El código es poesía que la máquina puede ejecutar."
      </p>
      <div class="footer-socials">
        <a href="https://linkedin.com/in/victor-yordi-diaz-gonzales-7b6841273" target="_blank" title="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/victorDG15" target="_blank" title="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://wa.me/51902411155" target="_blank" title="WhatsApp">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a href="mailto:victoryorddiazgonzales@gmail.com" title="Email">
          <i class="fa fa-envelope"></i>
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© {{ year }} Víctor Yordi Díaz Gonzales. Todos los derechos reservados.</span>
    </div>
  </div>
</footer>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  year = new Date().getFullYear();

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
