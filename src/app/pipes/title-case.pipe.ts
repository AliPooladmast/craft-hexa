import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): unknown {
    if (!value) return null;

    const wordsArray = value.split(' ').map((word, index) => {
      if (index !== 0 && this.isPreposition(word)) {
        return word.toLowerCase();
      } else {
        return this.toTitleCase(word);
      }
    });
    return wordsArray.join(' ');
  }

  private isPreposition(word: string) {
    const prepositions = ['for', 'the', 'of'];
    return prepositions.includes(word.toLowerCase());
  }

  private toTitleCase(word: string) {
    const firstLetter = word.substring(0, 1).toUpperCase();
    const rest = word.substring(1).toLowerCase();
    return firstLetter + rest;
  }
}
