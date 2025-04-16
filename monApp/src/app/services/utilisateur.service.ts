import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // URL de votre API Laravel

  constructor(private http: HttpClient) {}

  // Connexion d'un utilisateur
  login(email: string, mot_de_passe: string): Observable<any> {
    return new Observable((observer) => {
      this.http.post(`${this.apiUrl}/utilisateurs/login`, { email, mot_de_passe }).subscribe(
        (response: any) => {
          if (response && response.token) {
            // Stocker le token dans le local storage
            localStorage.setItem('token', response.token);
          }
          observer.next(response);
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }
  // Déconnexion d'un utilisateur
  logout(): Observable<any> {
    const token = localStorage.getItem('token');
  
    return this.http.post(
      `${this.apiUrl}/utilisateurs/logout`,
      {
      }, // corps vide
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
      }
    );
  }
  

  // Récupérer tous les utilisateurs (nécessite un token JWT)
  getUtilisateurs(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/utilisateurs`, { headers });
  }

  // Créer un nouvel utilisateur
  createUtilisateur(data: any, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/utilisateurs`, data, { headers });
  }

  // Récupérer un utilisateur spécifique
  getUtilisateur(id: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/utilisateurs/${id}`, { headers });
  }

  // Mettre à jour un utilisateur
  updateUtilisateur(id: number, data: any, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/utilisateurs/${id}`, data, { headers });
  }

  // Supprimer un utilisateur
  deleteUtilisateur(id: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiUrl}/utilisateurs/${id}`, { headers });
  }
}
