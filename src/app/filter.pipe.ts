import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.assigned_name.toString().toLowerCase().includes(searchText)
      || it.priority.toString().toLowerCase().includes(searchText) 
      || it.assigned_to.toString().toLowerCase().includes(searchText);
    });
  }
}
