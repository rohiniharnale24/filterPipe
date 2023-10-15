import { Pipe, PipeTransform } from '@angular/core';
import { Iplayers } from './model/players';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Iplayers[], searchText: string): Iplayers[] {
    if (!value) {
      return [];
    }
    if (!searchText) {
      return value;
    }
    let filterArray = value.filter((data) => {
      return data.country.toLowerCase().startsWith(searchText);
    });
    return filterArray;
  }
}
