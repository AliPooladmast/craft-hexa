import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
})
export class LikeComponent {
  @Input('likeCounts') likeCounts = 0;
  @Input('isActive') isActive = false;

  onLikeClick() {
    this.isActive = !this.isActive;
    this.likeCounts += this.isActive ? 1 : -1;
  }
}
