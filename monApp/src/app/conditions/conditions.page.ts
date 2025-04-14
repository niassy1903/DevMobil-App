import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.page.html',
  styleUrls: ['./conditions.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ConditionsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
