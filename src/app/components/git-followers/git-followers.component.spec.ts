import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitFollowersComponent } from './git-followers.component';

describe('GitFollowersComponent', () => {
  let component: GitFollowersComponent;
  let fixture: ComponentFixture<GitFollowersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitFollowersComponent]
    });
    fixture = TestBed.createComponent(GitFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
