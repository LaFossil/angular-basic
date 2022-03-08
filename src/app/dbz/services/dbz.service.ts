import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    /* Hasta video 67, 4:
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
     /* Convierte la propiedad en privada para que solo se pueda modificar personajes desde el servicio. Asigna guión bajo delante por convención para privados  */
     //Primero: propiedades
     private _personajes: Personaje[] = [
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

      /* Entonces necesita un metodo que retorne a personajes, getter para acceder a él */
      //Segundo: getters y setters
      get personajes(): Personaje[] {
          //return this._personajes; 
          /* Como en javascript todo se manda por referencia, esto puede ser un inconveniente y se puede manipular este getter.
          Mejor usar el operador spread, para evitar esa relacion de referencias de Javascript, es una buena práctica Javascript */
          return [...this._personajes];
      }

      //Tercero: constructores
      constructor() {
        //console.log('Servicio inicializado');
      }

      //Cuarto: los métodos
      agregarPersonaje( personaje: Personaje) {
          this._personajes.push(personaje);
      }




}