import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  invalidLogin: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  signIn(credentials: any) {
    this.authService.login(credentials).subscribe((result: boolean) => {
      if (result) {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/']);
      } else this.invalidLogin = true;
    });
  }
}
