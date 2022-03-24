import { Injectable } from '@angular/core';
import { content } from '../helper-files/content-interface';
import { CONTENTARRAY } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  constructor(private messageService: MessageService, private http:HttpClient) { }
 
  getContentObj():Observable<content[]>{
    // return of(CONTENTARRAY);
    return this.http.get<content[]>('api/content');
  }
  getHobbies(): Observable<content[]> {
    // const hobbies = of(CONTENTARRAY);
    this.messageService.add('Content array loeaded!');
    return this.http.get<content[]>('api/content');
  }
}
