import {TodoModel} from './todos/models/todo.model';
import {ActionReducerMap} from '@ngrx/store';
import {todoReducer} from './todos/todo.reducer';
import {FiltrosValidos} from './filtro/filtro.actions';
import {filtroReducer} from './filtro/filtro.reducer';


export interface AppState {
  todos: TodoModel[],
  filtro: FiltrosValidos
}


export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer,
  // {
  //   runtimeChecks: {
  //     strictStateImmutability: false,
  //     strictActionImmutability: false,
  //   },
  // }
}
