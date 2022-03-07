import { Pipe, PipeTransform } from '@angular/core';
import { content } from './helper-files/content-interface';

@Pipe({
  name: 'filterArrayPipe'
})
export class FilterArrayPipePipe implements PipeTransform {

  transform(hobbies: content[], htype?:string): content[] {
    return hobbies.filter(h=>{
      if(htype){
        return h.type==htype;
      }
      else{
        return !h.type;
      }
    });
  }

}
