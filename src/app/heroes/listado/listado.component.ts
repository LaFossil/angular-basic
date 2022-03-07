import { Component } from '@angular/core'; //, OnInit

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent { //implements OnInit

  /*constructor() {
    console.log('constructor');
   }

  ngOnInit(): void {
    console.log('ngOnInit'); //Se utiliza para inicializar cosas, hacer peticiones a algun servicio y se trae la información.
  }*/

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe() {
    
    this.heroeBorrado = this.heroes.shift() || ''; //Borra el primer elemento del arreglo //this.heroes.pop(); //Borra el ultimo
    
    console.log('Heroe borrado:' + this.heroeBorrado);
  }


}
