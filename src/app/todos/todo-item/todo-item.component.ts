import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TodoModel} from '../models/todo.model';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import * as actions from '../todo.actions';
import {borrar} from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {

  @Input() todo: TodoModel = {} as TodoModel;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;
  chkCompleted!: FormControl;
  txtInput!: FormControl;

  editando: boolean = false;

  constructor( private store: Store<AppState>) {}

  ngOnInit() {

    //this.todo = { ...this.todo, completado: true, };
    this.chkCompleted = new FormControl(this.todo.completado)
    this.txtInput = new FormControl(this.todo.texto, Validators.required)
    // console.log(this.todo);
    // this.todo.completado = true;

    this.chkCompleted.valueChanges.subscribe( valor => {
      this.store.dispatch( actions.toggle({ id: this.todo.id }) )
    })
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);

  }

  terminarEdicion() {
    this.editando = false;

    if( this.txtInput.invalid) { return; }
    if( this.txtInput.value === this.todo.texto) { return; }

    this.store.dispatch( actions.editar({
      id: this.todo.id,
      texto: this.txtInput.value
    }))
  }

   borrar() {
    this.store.dispatch( actions.borrar({ id: this.todo.id }))
   }
}
