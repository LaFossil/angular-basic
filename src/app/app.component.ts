import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  

  
}
console.log("============EJERCICIOS TYPESCRIPT==================");
let nombre: string = 'Strider'; /* Solo admite string */
let hp: number | string = 95; /* Admite numero O un string */
let estaVivo: boolean = true;
console.log( nombre, hp, estaVivo);
hp = 'FULL';
console.log( nombre, hp, estaVivo);

/* Arrays, buena practica poner siempre el tipo */
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];
/* Crear una interfaz  para definir el tipo compuesto */
interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}



const personaje: Personaje = {
  nombre: 'Strider',
  hp: 100,
  habilidades: ['Bash', 'Counter', 'Healing']
}

/*puebloNatal no se ha declarado porque es opcional ?*/
personaje.puebloNatal = 'Pueblo Paleta';
console.table( personaje );

/*Funciones Basicas*/
function sumar(a: string, b: string) {
  return (a + b).toUpperCase;
}

const resultado = sumar("Laura", " Gonz"); /*Si no se meten dos parametros muestra error pero sigue ejecutando */
console.log(resultado);

const sumarFlecha = (a:number, b:number):number => {
  return a + b;
}

function multiplicar( numero: number, otroNumero?: number, base: number = 2): number {
  return numero = base;
}

const resultado2 = multiplicar(5, 3); //10 Si quiero dar la base tb tengo que informar el opcional.
console.log(resultado2);

/*Las interfaces son como "clases" tontas, no le interesa lo que haya dentro sirve para restringir como va a funcionar un objeto
Las interfaces no tienen codigo en el archivo javascript */
interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.pv += curarX;
  console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: 'Strider',
  pv: 50,
  mostrarHp() {
    console.log('Puntos de vida', this.pv);
  }
}
console.log(nuevoPersonaje, 20);

/** Video 18, Tarea Tipado */
interface Direccion {
  calle: string;
  pais: string;
  ciudad: string;
}

interface SuperHeroe {
  nombre: string;
  edad: number;
  direccion: Direccion;
  mostrarDireccion: () => string;
}

const superHeroe: SuperHeroe = {
  nombre: 'Spiderman',
  edad: 30, 
  direccion: {
    calle: 'Main St',
    pais: 'USA',
    ciudad: 'NY'
  },
  mostrarDireccion() {
    return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
  }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);

/* Video 19, Desestruccturacion de Objetos */
interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: 'Mess',
  detalles: {
    autor: 'Ed Sheeran',
    anio: 2015
  }
}

console.log('El volumen actual de: ', reproductor.volumen);
console.log('El segundo actual de: ', reproductor.segundo);
console.log('La cancion actual de: ', reproductor.cancion);
console.log('El autor es: ', reproductor.detalles.autor);

 /* Objeto Desestructurado con {} es importante el nombre */
const { volumen, segundo, cancion, detalles } = reproductor; 
const { autor } = detalles;

console.log('El volumen actual de: ', volumen);
console.log('El segundo actual de: ', segundo);
console.log('La cancion actual de: ', cancion);
console.log('El autor es: ', autor);

/* Video 20, Desestruccturación de Arreglos */
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', dbz[2]);

/* Array Desestructurado con [] la posicion es importante, da igual el nombre: */
const [ , , p3 ] = dbz; 
/* si solo necesito uno no tengo que definir el resto: const [ p1, p2, p3 ] = dbz; 
console.log ('Personaje 1:', p1);
console.log ('Personaje 2:', p2); */
console.log ('Personaje 3:', p3);

/* Video 21 Desestructuración de Argumentos en una función */
interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: 'Nokia A1', 
  precio: 150
}

const tableta: Producto = {
  desc: 'iPad Air',
  precio: 350
}


/** Antes de desestructurar: 
function calculaISV( productos: Producto[] ):number {
  let total= 0;
  productos.forEach( (producto) => {
    total += producto.precio;
  })
  return total * 0.15;
} */

function calculaISV( productos: Producto[] ): [number, number] {
  let total= 0;
  productos.forEach( ({ precio }) => {
    total += precio;
  })
  /* return total * 0.15; */
  return [total, total * 0.15];
}

const articulos = [telefono, tableta];
/* Antes de desestructurar arreglo: const isv = calculaISV(articulos); */
const [ total, isv ] = calculaISV( articulos );
console.log ('TOTAL:', total);
console.log('ISV:', isv);

/* Video 22: Importaciones y Exportaciones */
/* Si no tuvieramos aqui la interfaz, estuviera en otro archivo, tenemos que ponerle el export: 

export interface Producto {
  desc: string;
  precio: number;
}

Y en nuestro archivo hacer el import, si se puede Ctrl+. para que nos lo traiga automatico, 
import { Producto } from './carpeta/nombreArchivodeInterfaz';
La importación se puede hacer por defecto, por nombre, se puede asignar un alias, luego las explicará
*/

const carritoCompras: Producto[] = [
  {
    desc: 'Telefono 1',
    precio: 100
  }, 
  {
    desc: 'Telefono 2',
    precio: 200
  }
];

/** Tambien necesitariamos exportar la funcion en el archivo origen 
export function calculaISV( productos: Producto[] ): [number, number] {
  let total= 0;
  productos.forEach( ({ precio }) => {
    total += precio;
  })
  return [total, total * 0.15];
}



Y sobre el metodo calculaISV pulsamos Ctrl+.
y nos sale la opción add que nos va a colocar en la misma desestructuración del mismo objeto, quedaria:
import { Producto, calculaISV } from './carpeta/nombreArchivodeInterfaz';

const [ total, isv ] = calculaISV( carritoCompras );
console.log ('TOTAL:', total);
console.log('ISV:', isv);

*/

/** Video 23, Clases Basicas */
/* Dentro de la clase podemos definir visibilidad: private, public, static, 
como las clases existen en codigo javascpript, si que salen en .js no las interfaces 
 Las clases nos valen para definir instancias */

 /** Para ver las diferencias con la interfaz 
  * 
  * 
  class Heroe {
    alterEgo: string; 
    edad: number; 
    nombreReal: number; 

    imprimirNombre() {
      //En la clase podemos implementarlo 
      return this.alterEgo + ' ' + this.nombreReal; 
    }
  } 
  interface Personaje2 {
    alterEgo?: string; 
    edad?: number; 
    nombreReal?: number; 
       //En la interfaz solo podemos definirlo 
    imprimirNombre: () => string;
  }
  const ironman = new Heroe();
  const spiderman: Personaje2 = {};
  console.log(ironman);
  console.log(spiderman);
  * 
  */


/** Video 24, Constructor de una clase */

//class Heroe {
  // public alterEgo: string; 
  // public edad: number; 
  // public nombreReal: number; 

  // constructor( alterEgo: string) {
    // this.alterEgo = alterEgo;
    // this.edad = edad;
    // this.nombreReal = ombreReal;
    // console.log('hey');
  // }
  //}

class Heroe {
  constructor(
    public alterEgo: string,
    public edad?: number,
    public nombreReal?: string
  ){}
}
const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman);

/* Video 25 Extender una clase, necesita el super */
class PersonaNormal {
  constructor (
    public nombre: string,
    public direccion: string
  ) {}
}
class Heroe2 extends PersonaNormal {
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ){
    super( nombreReal, 'New York, USA');
  }
}

const ironman2 = new Heroe2('Ironman', 45, 'Tony');
console.log(ironman2);

/** Video 26 Genericos, con el estandar <T> nos creamos el tipo generico para que admita cualquier cosa */
function queTipoSoy<T>(argumento: T) {
  return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4]);

let soyExplicito = queTipoSoy<number>( 100); //Un tipo generico puede ser cualquier tipo de dato que indiquemos

/** Video 27 Decoradores de clases 
 * Hay decoradores Factories, Composition, Evaluation para propiedades, para clases, para métodos..
 * Sirven para cambiar las clases en el momento en que son definidas, en el momento de compilado, 
 * entonces va a extenderle internamente esas funcionalidades que queremos implementar. 
 * Angular lo usa para cambiar las cosas
 * Un decorador no es más que una función
 * Al colocar, le sale un error que traduce como: */
 //@classDecorator 
 //Los decoradores son parte experimiental que puede estar sujeto a cambios en el futuro.
 //E indica que para trabajar con decoradores hay que colocar
 //'experimentalDecorators':true,  en el tsconfig.json (tanto en TypeScript como Angular)


function classDecorator<T extends { new (...args: any[]): {} }>( 
  constructor: T 
  ) { 
    return class extends constructor { 
      newProperty = "new property"; 
      hello = "override"; 
  }; 
} 

@classDecorator 
class MiSuperClase {
  public miPropiedad: string = 'ABC123';
  imprimir() {
    console.log('Hola Mundo');
  }
}

console.log( MiSuperClase);

const miClase = new MiSuperClase();
console.log (miClase.miPropiedad);

/** Video 28 Encadenamiento opcional
 * Simbolo ?
 * En la interfaz, significa que la propiedad hijos es opcional.
 * en la función nos aseguramos que evalue los hijos solo si los hijos tienen un valor,
 * solo si tiene valor que siga evaluando lo que sigue.. 
 * Cualquier propiedad o variable no definida en javascript tiene valor 'undefined'
 * porque si no tiene valor sacaria error de que de un undefined le estamos pidiendo una propiedad .length 
 */

interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: 'Fernando'
}

const pasajero2: Pasajero = {
  nombre: 'Melissa',
  hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos( pasajero: Pasajero ): void {
  //const cuantosHijos = pasajero.hijos?.length; //devuelve undefined
  const cuantosHijos = pasajero.hijos?.length || 0;
  console.log (cuantosHijos);
}
imprimeHijos(pasajero1);


console.log("======== FIN EJERCICIOS TYPESCRIPT =====================");




