import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: any[], key: string, direction: number): any {
    if (!value || !key || !direction) {
      return value;
    }

    return value.sort((a, b) => {
      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return (a[key] - b[key]) * direction;
      }

      return ('' + a[key])
        .toLowerCase()
        .localeCompare(
          ('' + b[key])
            .toLowerCase()
          ) * direction;
    });
  }

}
