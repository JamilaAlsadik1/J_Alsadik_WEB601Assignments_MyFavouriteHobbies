import { Injectable } from '@angular/core';
import{InMemoryDbService} from 'angular-in-memory-web-api';
import { CONTENTARRAY } from '../helper-files/contentDb';
import { content } from '../helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb(){
    const content:content[]=CONTENTARRAY;
    return {content};
  }
  genId(content: content[]): number {
    return content.length > 0 ?
    Math.max(...content.map(c => c.id ?? 0)) + 1 : 2000;
  }
}
