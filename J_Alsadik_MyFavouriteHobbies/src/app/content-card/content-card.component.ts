import { Component, OnInit } from '@angular/core';
import {content} from '../helper-files/content-interface';
import {ContentList} from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
running:content;
reading:content;
traveling:content;
hobbies:ContentList;
  constructor() { 
    this.running={
      id:1,
      title:'running',
      description:"I like running in the early morning , it's a good sport to start your day with ",
      creater:"Greece",
      imgURL:"https://cdn.shopify.com/s/files/1/0603/7543/3450/files/2019_GloryBarnabas_1_2048x2048.jpg?v=1640618660",
      type:"sport"
    }
    this.reading={
      id:2,
      title:'Reading ',
      description:"I like reading books with new concept that improve my skills",
      creater:"the Akkadian princess and High Priestess Enheduanna",
      imgURL:"https://s2982.pcdn.co/wp-content/uploads/2020/12/an-old-woman-reading.jpg.webp",
      type:"extensive reading"
    }
    this.traveling={
      id:3,
      title:'traveling ',
      description:"I like traveling new places and descover new cultures ",
      creater:"Romans ",
      imgURL:"https://www.vaunte.com/wp-content/uploads/2018/12/Traveling-Internationally.jpg",
      type:"Conformist"
    }
    this.hobbies=new ContentList();
    this.hobbies.addItem(this.running);
    this.hobbies.addItem(this.reading);
    this.hobbies.addItem(this.traveling);
  }

  ngOnInit(): void {
  }

}
