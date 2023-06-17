import {Injectable} from '@angular/core'
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { RESTAutor } from '../interfaces/autor.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favorito } from '../interfaces/favoritos.interface';
import { AuthGuard } from 'src/app/guards/auth-guard.guard';

@Injectable({ 
    providedIn:'root'
})
export class autorService{
    private apiURL: string = "https://poetrydb.org/";
    private autor! : RESTAutor;
    private saveAutor: RESTAutor[] = [];
    fav: Favorito[] = []; 
    favObj!: Favorito;
    private Islogged: boolean = false;
    constructor(private autGuard:AuthGuard, private http: HttpClient){}
    login(email:string,psswd:string){//Método de logeo

        if(email === "admin" && psswd === "admin"){
            localStorage.setItem("token","(2u=v3kL9u2PH$936=gdgk@PZ{j6wnag5@hbHYdwn!nf!-cK-A");//Token de entrada
            this.Islogged = true;
            alert("Bienvenido")
        }else{
            alert("Correo o contraseña incorrecto")
        }
    }
    obtenerAutor():Observable<any[]>{//Obtencion del listado de autores a partir metodo rest
        const url = `${this.apiURL}author`;
        console.log(url);
        return this.http.get<any[]>(`${this.apiURL}author`)
    }
    obtenertrabajos(autor:string):Observable<any>{//Metodo rest para obtener las obras del autor seleccionado
        const url = `${this.apiURL}/author ${autor}`;
        console.log(url);
        return this.http.get<any>(`${this.apiURL}/author/${autor}`);
    }
    obtenertrabajosrandom():Observable<any>{//Método rest para obtener las obras random
        const url = `${this.apiURL}/random/6/author,title.json`;
        console.log(url);
        return this.http.get<any>(`${this.apiURL}/random/6/author,title.json`);
    }
    guardarFavoritos(tema: string, lines: string, autor: string){ //Guardar en el LocalStorage las obras favoritas
        console.log(tema)
        console.log(autor)
        console.log(lines)
        //Se guarda primero en el local storage
        this.favObj = 
            {
                autor: autor.toLocaleLowerCase(),
                obra: tema.toLocaleLowerCase(),
                lineas: lines,
            }
            if(this.fav.length === 0){
                this.fav.push(this.favObj);
                localStorage.setItem('Favoritos',JSON.stringify(this.fav));
            }else{
                //2.1 validación obra
                const resEmail = this.fav.find(uss => uss.obra === tema);
                if(resEmail === undefined){
                    //3.- guardar BD
                    this.fav.unshift(this.favObj);
                    localStorage.setItem('Favoritos',JSON.stringify(this.fav));
                }else{
                    alert("El correo ingresado ya se encuentra registrado")
                }
            }

    }
    obtenerHistorial(){//Obtencion del historial a partir del localStorage
        this.fav = JSON.parse(localStorage.getItem("Favoritos")!);
        return JSON.parse(localStorage.getItem("Favoritos")!)
    }
}