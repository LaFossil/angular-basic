import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent  {

  
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  
  /* Video 68, ya no vamos a usarlo asi: 
  //Output Un componente hijo necesita emitir un evento al padre,
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if( this.nuevo.nombre.trim().length === 0) {return;}
    console.log(this.nuevo);
    this.onNuevoPersonaje.emit( this.nuevo); //se emite el nuevo valor

    //this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }

  Para el video 68 ahora vamos a usar el metodo creado en el servicio */

  constructor ( private dbzService: DbzService ){}

  agregar(){
    if( this.nuevo.nombre.trim().length === 0) {return;}
    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }


}
