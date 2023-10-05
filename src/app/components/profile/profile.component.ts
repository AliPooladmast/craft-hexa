import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private router: ActivatedRoute, private programRouter: Router) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      console.log(params.get('id'));
    });
  }

  submit() {
    this.programRouter.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' },
    });
  }
}
