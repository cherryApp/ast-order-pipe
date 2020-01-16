import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], phrase: string): any {
    if (!value || !phrase) {
      return value;
    }

    phrase = phrase.toLowerCase();

    return value.filter( item => {
      const jsonItem: string = JSON.stringify(item).toLowerCase()
        .replace(/"[^"]*"\:/g, '')
        .replace(/[",\{\}]/g, '');
      return jsonItem.includes(phrase);
    });
  }

}
