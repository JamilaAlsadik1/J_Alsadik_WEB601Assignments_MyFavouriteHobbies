import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArrayPipe'
})
export class FilterArrayPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
