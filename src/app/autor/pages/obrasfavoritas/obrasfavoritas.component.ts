import { Component } from '@angular/core';
import { Favorito } from '../../interfaces/favoritos.interface';
import { autorService } from '../../services/autor.service';

@Component({
  selector: 'app-obrasfavoritas',
  templateUrl: './obrasfavoritas.component.html',
  styleUrls: ['./obrasfavoritas.component.css']
})
export class ObrasfavoritasComponent {
  //Inicialización de variables y arreglos
  obras: Favorito[] = []; 
  numObr:number =  0;
  //Carga de servicios
  constructor(private autorService: autorService){}
  igualarObras(){//Obtencion de obras en base al historial
    this.obras = this.autorService.obtenerHistorial();
    this.numObr = this.obras.length;
  }
  ngOnInit(): void {
    this.igualarObras();
    
    
  }
}
