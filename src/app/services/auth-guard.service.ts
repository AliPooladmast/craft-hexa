import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) return true;

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}

export const canActivateTeam: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(AuthGuardService).canActivate(state);
};
