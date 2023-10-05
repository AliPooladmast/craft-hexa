import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { GitFollowersService } from 'src/app/services/git-followers.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'git-followers',
  templateUrl: './git-followers.component.html',
  styleUrls: ['./git-followers.component.scss'],
})
export class GitFollowersComponent {
  followers: any;

  constructor(
    private service: GitFollowersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap((combined) => {
          const id = combined[0].get('id');
          const page = combined[0].get('page');

          return this.service.get();
        })
      )
      .subscribe((followers: any) => {
        this.followers = followers.users;
      });
  }
}
