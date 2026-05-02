import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  loading = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(120)]],
      subject: ['', [Validators.required, Validators.maxLength(120)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    if (this.loading) return;

    this.loading = true;

    const formData = this.contactForm.value;

    emailjs.send(
      'service_owg9gaq',
      'template_mnmclfn',
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'pPQdJFuhM6j8if1K2'
    )
      .then(() => {
        this.success = true;
        this.contactForm.reset();
        this.submitted = false;
        this.loading = false;

        setTimeout(() => this.success = false, 5000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        this.loading = false;
        alert('No se pudo enviar el mensaje');
      });
  }

  onPasteLimit(event: ClipboardEvent, max: number) {
    const paste = event.clipboardData?.getData('text') || '';
    const current = this.contactForm.get('message')?.value || '';

    if ((current.length + paste.length) > max) {
      event.preventDefault();
    }
  }

  get f() { return this.contactForm.controls; }
}
