import {createAction, props} from '@ngrx/store';

export const filtrosValidos = ['todos', 'completados', 'pendientes'] as const;
export type FiltrosValidos = typeof filtrosValidos[number];

export const setFiltro = createAction(
  '[Filtro] Set Filtro',
  props<{ filtro: FiltrosValidos  }>()
);
