import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  backgroundColor = environment;
}
