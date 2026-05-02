import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-floating-contact',
  templateUrl: './floating-contact.component.html',
  styleUrls: ['./floating-contact.component.scss']
})
export class FloatingContactComponent implements OnInit, OnDestroy {

  isWhatsapp = true;
  showTooltip = false;
  imgError = false;

  readonly whatsappLink =
    'https://wa.me/51902411155?text=Hola%20V%C3%ADctor%2C%20vengo%20de%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto.';

  readonly emailLink =
    'mailto:victoryorddiazgonzales@gmail.com?subject=Proyecto%20desde%20Portafolio&body=Hola%20V%C3%ADctor%2C%20me%20gustar%C3%ADa%20contactarte%20sobre...';

  private readonly SWITCH_INTERVAL = 8_000;

  private readonly TOOLTIP_DURATION = 4_000;

  private readonly INITIAL_DELAY = 2_000;

  private readonly whatsappMessages: string[] = [
    '¿Tienes un proyecto? Hablemos por WhatsApp 💬',
    'Escríbeme por WhatsApp ⚡',
    '¿Arrancamos algo juntos? Cuéntame tu idea 🚀',
  ];

  private readonly emailMessages: string[] = [
    '¿Tienes un proyecto en mente? Escríbeme ✉️',
    'Cuéntame tu idea y lo hacemos realidad 💡',
    '¿Trabajamos juntos? Envíame un correo 🤝',
  ];

  private whatsappMsgIndex = 0;
  private emailMsgIndex = 0;

  private intervalId: ReturnType<typeof setInterval> | null = null;
  private tooltipTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private initialTimeoutId: ReturnType<typeof setTimeout> | null = null;
  get currentLink(): string {
    return this.isWhatsapp ? this.whatsappLink : this.emailLink;
  }

  get currentMessage(): string {
    if (this.isWhatsapp) {
      return this.whatsappMessages[this.whatsappMsgIndex % this.whatsappMessages.length];
    }
    return this.emailMessages[this.emailMsgIndex % this.emailMessages.length];
  }

  ngOnInit(): void {
    this.initialTimeoutId = setTimeout(() => {
      this.showTooltipBriefly();
    }, this.INITIAL_DELAY);
    this.intervalId = setInterval(() => {
      this.switchChannel();
    }, this.SWITCH_INTERVAL);
  }

  ngOnDestroy(): void {
    this.clearAllTimers();
  }

  onMouseEnter(): void {
    this.clearTooltipTimeout();
    this.showTooltip = true;
  }

  onMouseLeave(): void {
    this.showTooltip = false;
  }

  private switchChannel(): void {
    if (this.isWhatsapp) {
      this.whatsappMsgIndex++;
    } else {
      this.emailMsgIndex++;
    }

    this.isWhatsapp = !this.isWhatsapp;
    this.showTooltipBriefly();
  }

  private showTooltipBriefly(): void {
    this.clearTooltipTimeout();
    this.showTooltip = true;

    this.tooltipTimeoutId = setTimeout(() => {
      this.showTooltip = false;
    }, this.TOOLTIP_DURATION);
  }

  private clearTooltipTimeout(): void {
    if (this.tooltipTimeoutId !== null) {
      clearTimeout(this.tooltipTimeoutId);
      this.tooltipTimeoutId = null;
    }
  }

  private clearAllTimers(): void {
    if (this.intervalId !== null) clearInterval(this.intervalId);
    if (this.tooltipTimeoutId !== null) clearTimeout(this.tooltipTimeoutId);
    if (this.initialTimeoutId !== null) clearTimeout(this.initialTimeoutId);
  }
}