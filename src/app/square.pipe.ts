import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: any,...args:any[]): number {
    //if(args[0]==10)
    return value*value* args[0];
  }

}
