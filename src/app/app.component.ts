import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // É transformado numa tag HTML <app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];

  constructor() {
    this.todos.push('Passear com o cachorro');
    this.todos.push('Ir ao supermercado');
    this.todos.push('Cortar o cabelo');
  }
}
