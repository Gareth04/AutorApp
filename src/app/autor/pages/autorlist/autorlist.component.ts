import { Component } from '@angular/core';
import { RESTAutor } from '../../interfaces/autor.interface';
import { autorService } from '../../services/autor.service';

@Component({
  selector: 'app-autorlist',
  templateUrl: './autorlist.component.html',
  styleUrls: ['./autorlist.component.css']
})
export class AutorlistComponent {
  //Inicialización de variables y arreglos
  public autores: any[] = []; 
  public trabajos_aut: any[] = []; 
  public  random: any [] = [];
  public name: string = "";
  popup = document.getElementById('popup');
  //Carga del servicio
  constructor(private autorService: autorService){}
  cargarAutor(){//Carga del autor
    this.autorService.obtenerAutor().subscribe(
      response => {
        this.autores = response;
        this.autores = Object.values(response)[0];
      }, 
      error =>{
        console.log(error)
      }
    )
  }
  trabajosAutor(autor: string){//Obtencion de los trabajos del autor
    this.autorService.obtenertrabajos(autor).subscribe(
      response => {
        this.trabajos_aut = response;
        this.trabajos_aut = Object.values(response);
        console.log(this.trabajos_aut);
      }, 
      error =>{
        console.log(error)
      }
    )
  
    this.name = autor;
    this.openPopup()
  }
  trabajosRandom(){//Obtencion de los trabajos random
    this.autorService.obtenertrabajosrandom().subscribe(
      response => {
        this.random = response;
        console.log(this.trabajos_aut);
      }, 
      error =>{
        console.log(error)
      }
    )
  }
  openPopup(){//Apertura del modal
    document.querySelector('.popup')?.classList.add('open-popup')
  }
  closePopup(){//Close del modal
    console.log("Entre");
    document.querySelector('.popup')?.classList.remove('open-popup')
  }
  agregarFavorito(tema: string, lineas: string, autor: string){//Metodo de guardado de favoritos
    this.autorService.guardarFavoritos(tema, lineas, autor);
    this.closePopup();

  }
  ngOnInit(): void {
    this.cargarAutor();
    this.trabajosRandom();
  }
}
