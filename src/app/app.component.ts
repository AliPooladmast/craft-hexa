import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'craft-hexa super';

  post = {
    title: 'Title',
    isFavorite: false,
  };

  tweet = {
    body: 'Here is the body of the tweet',
    isLiked: false,
    likeCounts: 0,
  };

  onFavoriteChange(isFavorite: boolean) {
    console.log('Favorite changed: ', isFavorite);
  }
}
