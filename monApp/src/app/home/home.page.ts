import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { UtilisateurService } from '../services/utilisateur.service'; // Assurez-vous que le chemin est correct
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FormsModule, HttpClientModule],
  standalone: true,
  providers: [UtilisateurService],
})

export class HomePage {
  token: string = ''; // Stockez le token JWT ici

  constructor(
    private router: Router,
    private utilisateurService: UtilisateurService // Injecting the service
  ) {}

  logout() {
    this.utilisateurService.logout().subscribe(
      (res) => {
        console.log('Déconnexion réussie :', res);
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        console.error('Erreur lors de la déconnexion', err);
      }
    );
  }
  
}
