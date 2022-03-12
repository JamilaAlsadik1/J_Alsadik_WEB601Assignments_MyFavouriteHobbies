import { Injectable } from '@angular/core';
import { content } from '../helper-files/content-interface';
import { CONTENTARRAY } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  constructor(private messageService: MessageService) { }
 
  getContentObj():Observable<content[]>{
    return of(CONTENTARRAY);
  }
  getHobbies(): Observable<content[]> {
    const hobbies = of(CONTENTARRAY);
    this.messageService.add('Content array loeaded!');
    return hobbies;
  }
}
