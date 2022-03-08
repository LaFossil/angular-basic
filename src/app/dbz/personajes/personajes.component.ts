import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  /* Lo quitamos para video 67, 4, en el que vamos a manejar todos los datos desde el servicio 
  //Quien lo utilice me puede mandar los datos (desde el componente hijo)
  @Input() personajes: any[] = []; 

  */

  get personajes() {
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService ){}

}
