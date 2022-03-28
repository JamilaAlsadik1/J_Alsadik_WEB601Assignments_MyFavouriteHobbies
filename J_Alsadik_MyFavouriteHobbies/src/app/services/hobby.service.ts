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
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };
  getContentObj():Observable<content[]>{
    // return of(CONTENTARRAY);
    return this.http.get<content[]>('api/content');
  }
  getHobbies(): Observable<content[]> {
    // const hobbies = of(CONTENTARRAY);
    this.messageService.add('Content array loeaded!');
    return this.http.get<content[]>('api/content');
  }
  addContent(newContent: content):Observable<content>{
    this.messageService.add('New content Successfully added!');
    return this.http.post<content>('api/content', newContent,this.httpOptions);
  }
  updateContent(contentItem: content): Observable<any>{
    return this.http.put("api/content", contentItem, this.httpOptions);
}
}