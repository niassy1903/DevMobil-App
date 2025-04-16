import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonHeader, IonContent, IonToolbar, IonTitle } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
  standalone: true,
  imports: [IonTitle, IonToolbar, IonHeader, IonContent, CommonModule, FormsModule, ReactiveFormsModule],
})
export class ResetPasswordPage {
  resetPasswordForm: FormGroup;
  passwordStrength: number = 0;

  constructor(private formBuilder: FormBuilder , private router: Router) {
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });

    // Mettre à jour la force du mot de passe à chaque changement
    this.resetPasswordForm.get('newPassword')?.valueChanges.subscribe(value => {
      this.updatePasswordStrength(value);
    });
  }

  updatePasswordStrength(password: string) {
    this.passwordStrength = this.calculateStrength(password);
  }

  calculateStrength(password: string): number {
    let strength = 0;
    if (password.length >= 6) strength += 20;
    if (/[A-Z]/.test(password)) strength += 20;
    if (/[a-z]/.test(password)) strength += 20;
    if (/[0-9]/.test(password)) strength += 20;
    if (/[^A-Za-z0-9]/.test(password)) strength += 20;
    return strength;
  }

  resetPassword() {
    if (this.resetPasswordForm.valid) {
      const { newPassword, confirmPassword } = this.resetPasswordForm.value;

      if (newPassword !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
      }

      // Logique de soumission à un service ou une API
      console.log('Mot de passe réinitialisé avec succès');
    } else {
      this.resetPasswordForm.markAllAsTouched();
    }
  }

  goBack() {
    // Logique de retour ou de navigation
    console.log("Retour à la page précédente");
    this.router.navigate(['/login']);
  }
}
