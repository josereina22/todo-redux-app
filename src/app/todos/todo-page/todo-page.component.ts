import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {TodoModel} from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  standalone: false,
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {

  @Input() todo: TodoModel = {} as TodoModel;
  completado: boolean = false;

  constructor( private store: Store<AppState>) {}


  toggleAll() {
    this.completado = !this.completado;
    this.store.dispatch(actions.toggleAll({ completado: this.completado}))
  }
}
