import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input('nombre') leyenda: string = "Leyenda";
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 
    // console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.progreso);
  }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.progreso);
  }

  cambiarValor( valor ) {
    this.progreso = this.progreso + valor;
    this.cambioValor.emit( this.progreso);
    
     if ( this.progreso >= 100) {
     this.progreso = 100;
     return;
     }
    if ( this.progreso <= 0) {
    this.progreso = 0;
    return;
    }
 }

}
