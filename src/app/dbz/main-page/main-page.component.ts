import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
/* Video 67, 1, Centralizamos el acceso de personajes en el servicio
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    },
    { 
      nombre: 'Krillin',
      poder: 800
    }
  ];
*/

  /* Video 67, 2, para que no de error por habernos llevado personajes al servicio, lo creamos vacio */
  /* personajes: Personaje[] = []; */

  /* Video 67, 4, Lo unico que va a tener el main-page es el valor por defecto que quiero establecer para el personaje */

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  /* agregar( event: any) {
    event.preventDefault();
    console.log('hey');
    console.log(event);
  } */
  /* Nos llevamos agregar a su propio componente que es hijo de este */

  /*Video 67, 3, otra forma de resolverlo que nos hemos llevado personajes al servicio  */
  /*
  get personajes(): Personaje[]{
    return this.DbzService.personajes;
  } */

  /*Video 67, 4 quita tambien el método de aqui, para refactorizar al maximo y llevarse todo lo que pueda al servicio 

  agregarNuevoPersonaje( argumento: Personaje ){
    console.log("Main page component: agregarNuevoPersonaje");
    console.log(argumento);
    //debugger; 
    this.personajes.push(argumento);
  }

  */

  /* Nos llevamos la data y el manejo de la misma, agregarNuevoPersonaje a un servicio, 
      para centralizar su uso y asi sea la misma para todos los componentes, */
  /* Primero necesitamos definir una propiedad en la clase y asignar el valor, es la inyeccion de dependencias, estamos inyectando el servicio */

  /* Video 67, lo hemos usado pero finalmente en el paso de 67, 4, que va a refactorizar lo deja al mínimo. 
  constructor( private DbzService: DbzService){   
    */
    /*inicializamos el contructor, solo para el ejemplo del video 67, 2, en que nos hemos llevado personajes al servicio, no es lo habitual: 
    this.personajes = this.DbzService.personajes; 
  }
  */

    constructor() {}  

}
