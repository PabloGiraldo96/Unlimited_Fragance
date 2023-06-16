import { Component, OnInit } from '@angular/core';
import { Locion } from '../interfaz/lociones';

@Component({
  selector: 'app-lociones',
  templateUrl: './lociones.component.html',
  styleUrls: ['./lociones.component.css']
})
export class LocionesComponent {
  public locion1: Locion = {
    nombre: "One Million",
    foto:["https://firebasestorage.googleapis.com/v0/b/unlimitedfragance.appspot.com/o/Locion1.png?alt=media&token=0558e68d-13d1-41ba-854e-d241ee7bb82c"],
    precio: 40000
}

  public locion2: Locion = {
    nombre: "Al Haramain",
    foto:["https://firebasestorage.googleapis.com/v0/b/unlimitedfragance.appspot.com/o/Locion3.png?alt=media&token=19449f99-754c-4a74-98ce-4bceed50c885"],
    precio: 40000
}

  public locion3: Locion = {
    nombre: "Toy 2 Moschino",
    foto:["https://firebasestorage.googleapis.com/v0/b/unlimitedfragance.appspot.com/o/Locion2.png?alt=media&token=e593ee76-847d-44fa-8c08-eefc3ff10265"],
    precio: 40000
} 

  public locion4: Locion = {
    nombre: "Creed Blanca",
    foto:["https://firebasestorage.googleapis.com/v0/b/unlimitedfragance.appspot.com/o/Locion4.png?alt=media&token=905ca6e4-36af-4777-b94d-6a49a4cbc724"],
    precio: 40000
} 


public lociones: Locion[] = [this.locion1, this.locion2, this.locion3, this.locion4]

public constructor(){
  console.log(this.lociones)
}

}
