import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  targetDate: Date;
}

@Component({
  selector: 'app-list-todos',
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})

export class ListTodosComponent {
  todos: Todo[] = [
    { id: 1, title: 'Learn Angular', completed: false, targetDate: new Date('2023-12-01') },
    { id: 2, title: 'Build a Todo App', completed: false, targetDate: new Date('2023-12-15') },
    { id: 3, title: 'Deploy the App', completed: false, targetDate: new Date('2023-12-31') }
  ];
}
