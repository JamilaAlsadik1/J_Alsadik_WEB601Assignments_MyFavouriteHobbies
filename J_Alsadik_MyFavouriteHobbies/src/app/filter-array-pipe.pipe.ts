import { Pipe, PipeTransform } from '@angular/core';
import { content } from './helper-files/content-interface';

@Pipe({
  name: 'filterArrayPipe'
})
export class FilterArrayPipePipe implements PipeTransform {

  transform(hobbies: content[], htype?:string): content[] {
    return hobbies.filter(function(h){
      if(h.type==htype){
        return h.type?.length!=0;
        
      }
     else{
       return h.type?.length==0;
     }
    });
  }

}
