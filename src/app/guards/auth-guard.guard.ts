import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.IsLoggedIn()){
      return true;
    }
    alert("Necesitas iniciar sesión para ingresar")
    this.router.navigate(['login'])
    return false;
  }

  IsLoggedIn() {
      return localStorage.getItem('token');
    } 
  
}
