import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root', // É transformado numa tag HTML <app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Minhas Tarefas';

  constructor() {
    this.todos.push(new Todo(1, 'Learn Angular', false));
    this.todos.push(new Todo(2, 'Learn F#', true));
    this.todos.push(new Todo(3, 'Play Elden Ring', false));
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1){
      this.todos.splice(index, 1);
    }
}

markAsDone(){
    
}

markAsUndone(){
    
}
}
