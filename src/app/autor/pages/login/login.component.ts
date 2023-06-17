import { Component } from '@angular/core';
import { autorService } from '../../services/autor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //Inicialización de variables
  log_email: string = "";
  log_psswd: string = "";
  constructor(private autorservice: autorService){}
  login(){//Metodo de logueo
    switch(""){
      case this.log_email.trim():
        alert("Ingrese su email")
        break;
      case this.log_psswd.trim():
        alert("Ingrese su contraseña")
        break;
      default:
        this.autorservice.login(this.log_email.toLowerCase(),this.log_psswd);
    }
  }
}
