import { createReducer, on } from '@ngrx/store';
import {borrar, crear, editar, limpiarTodos, toggle, toggleAll} from './todo.actions';
import {TodoModel} from './models/todo.model';

export const estadoInitial:TodoModel[] = [
  new TodoModel('Salvar al mundo'),
  new TodoModel('Vencer a Thanos'),
  new TodoModel('Pelear con Goku'),
  new TodoModel('Superar a Bills'),
];

export const todoReducer = createReducer(estadoInitial,
  on(limpiarTodos, state => state.filter( todo => !todo.completado) ),
  on(crear, (state, { texto }) => [...state, new TodoModel( texto )]),
  on( borrar, (state, { id }) => state.filter( todo => todo.id !== id) ),
  on(toggleAll, (state, { completado }) => {
    return state.map( todo => {
      return {
        ...todo,
        completado: completado
      }

    });
  }),
  on(toggle, (state, { id }) => {
    return state.map( todo => {
      if ( todo.id === id ) {
        return {
          ...todo,
          completado: !todo.completado
        }
      }
      return todo;
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map( todo => {
      if ( todo.id === id ) {
        return {
          ...todo,
          texto: texto
        }
      }
      return todo;
    });
  }),
);
