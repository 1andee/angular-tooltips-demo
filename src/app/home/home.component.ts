import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'home',
  providers: [],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})

export class HomeComponent {
  thinkerContent: string;
  creatorContent: string;

  constructor(public appState: AppState) {
    this.thinkerContent = `The Thinker values analyzing ideas down to its very inception; driven by the desire to understand`;
    this.creatorContent = `Friends will describe the Creator as complicated, open, and idealistic.`;
  }
}
