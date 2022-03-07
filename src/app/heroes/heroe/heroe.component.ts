import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'Ironman';
    edad: number = 45;

    //Como estamos en una clase podemos crear getter y setter, 
    //Crearme un get es como crear mediante codigo una propiedad que cuando la llame va a ser procesada
    //Se va a ver como una propiedad igual que nombre, edad, no es un metodo
    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        //return this.nombre + ' - ' + this.edad;
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }

}