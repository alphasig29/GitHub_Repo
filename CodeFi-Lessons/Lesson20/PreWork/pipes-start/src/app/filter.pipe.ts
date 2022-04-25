import { Pipe, PipeTransform } from '@angular/core';

// using the pure option causes the filter to be impure - allows adds to not be filtered.
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string ): any {
    if (value.length === 0 || filterString === '') {
      return value;
      console.log('empty value');
    }
    console.log(propName);
    const resultArray = [];
    for(const item of value) {
      if (item[propName] === filterString ) {
        resultArray.push(item);
        console.log(item['name']);
      }
    }
    return resultArray;
  }

}
