import {Component, OnInit} from '@angular/core';
import {TodoModel} from '../models/todo.model';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {FiltrosValidos} from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  todos: TodoModel[] = [];
  filtroActual: FiltrosValidos = 'todos';

  constructor( private store: Store<AppState>) {}

  ngOnInit() {
    // this.store.select('todos')
    //   .subscribe( todos => this.todos = todos );

    this.store.subscribe(({ todos, filtro }) => {
      this.todos = todos;
      this.filtroActual = filtro;
    })
  }
}
