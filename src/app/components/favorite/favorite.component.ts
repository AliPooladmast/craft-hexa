import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent {
  @Input('isFavorite') isFavorite = false;
  @Output('change') change = new EventEmitter();

  searchText = '';

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }
}
