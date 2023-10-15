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
export class AdminAuthGuardService {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    const user = this.authService.currentUser;
    if (user && user.isAmdin) return true;

    this.router.navigate(['/no-access']);
    return false;
  }
}

export const canActivateAdmin: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(AdminAuthGuardService).canActivate();
};
