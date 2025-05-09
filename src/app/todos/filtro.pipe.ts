import { Pipe, PipeTransform } from '@angular/core';
import {TodoModel} from './models/todo.model';
import {FiltrosValidos} from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo',
  standalone: false
})
export class FiltroPipe implements PipeTransform {

  transform(todos: TodoModel[], filtro: FiltrosValidos): TodoModel[] {

    switch (filtro) {
      case 'completados':
        return todos.filter(t => t.completado);
      case 'pendientes':
        return todos.filter(t => !t.completado);
      default:
        return todos;
    }

  }

}
