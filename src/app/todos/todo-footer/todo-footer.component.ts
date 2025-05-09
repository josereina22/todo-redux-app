import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import * as actions from '../../filtro/filtro.actions';
import {limpiarTodos} from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  standalone: false,
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent implements OnInit{

  filtralActual: actions.FiltrosValidos = 'todos';
  filtros: actions.FiltrosValidos[] = ['todos', 'completados', 'pendientes'];
  pendientes:number = 0;

  constructor( private store: Store<AppState>) {

  }

  ngOnInit() {

   // this.store.select('filtro')
   //   .subscribe( filtro => this.filtralActual = filtro);

    this.store.subscribe(state => {

      this.filtralActual = state.filtro;
      this.pendientes    = state.todos.filter( todo => !todo.completado ).length
    })
  }

  cambiarFiltro( filtro: actions.FiltrosValidos ) {
    this.store.dispatch( actions.setFiltro({ filtro }));
  }

  limpiarCompletados( ) {
    this.store.dispatch( limpiarTodos() )
  }
}
