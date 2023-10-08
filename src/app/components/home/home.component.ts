import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  archives = [
    { year: 2017, month: 1 },
    { year: 2017, month: 2 },
    { year: 2017, month: 3 },
  ];
}
