import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  resetPasswordForm: FormGroup;
  passwordStrength: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });

    this.resetPasswordForm.get('newPassword')?.valueChanges.subscribe(value => {
      this.updatePasswordStrength(value);
    });
  }

  updatePasswordStrength(password: string) {
    const strength = this.calculateStrength(password);
    this.passwordStrength = strength;
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

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      // Handle password reset logic here
      console.log('Password reset successful');
    }
  }
}