import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AppGuardService {

  constructor(private router: Router) { }

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    //if(this.authService.isLoggedIn()) return true;
  }
}
