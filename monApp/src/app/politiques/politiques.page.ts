import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-politiques',
  templateUrl: './politiques.page.html',
  styleUrls: ['./politiques.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PolitiquesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
