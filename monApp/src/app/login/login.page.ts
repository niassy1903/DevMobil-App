import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service'; // Assurez-vous que le chemin est correct
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HttpClientModule],
  providers: [UtilisateurService], // Ajoutez le service ici
})
export class LoginPage implements OnInit {
  email: string = ''; // Champ pour l'email
  mot_de_passe: string = ''; // Champ pour le mot de passe
  showPassword: boolean = false; // Pour afficher ou masquer le mot de passe

  constructor(private router: Router, private utilisateurService : UtilisateurService) { }

  Seconnecter() {
    // Appel du service pour la connexion
    this.utilisateurService.login(this.email, this.mot_de_passe).subscribe(
      (response) => {
        console.log('Connexion réussie :', response);
        // Redirection vers la page d'accueil après une connexion réussie
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Erreur de connexion :', error);
        // Gérer les erreurs ici (afficher un message à l'utilisateur, etc.)
      }
    );
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  ngOnInit() {
  }

}
