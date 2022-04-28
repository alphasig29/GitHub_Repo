import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 0){
      let stringArray:string[] = [];
      stringArray = [...value];
      // console.log(stringArray);
      // console.log(stringArray.reverse);
      return stringArray.reverse().join('');

    }
    return value;
  }

}
