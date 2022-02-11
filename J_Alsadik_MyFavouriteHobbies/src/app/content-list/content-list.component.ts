import { Component, OnInit } from '@angular/core';

import {content} from '../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
contentArray:content[];
outPut:string;
  constructor() {
    this.contentArray=[{
      id:1,
      title:"ruuning",
      description:"it's a great sport",
      creater:"Greece",
      imgURL:"https://s-i.huffpost.com/gen/4336392/images/o-RUNNING-facebook.jpg",
    type:"sport",
  tags:['sport','hobby','miles'] },
      {
        id:2,
      title:"reading",
      description:"Getting more knowledges and there alot of types of book",
      creater:"and High Priestess Enheduanna",
      imgURL:"https://s26378.pcdn.co/wp-content/uploads/student-working-on-SAT-reading-section.jpg" ,
      tags:['hobby','book','reading','library']
      },
      {
        id:3,
      title:"Traveling",
      description:"exploring new places and cultures",
      creater:"Romans",
      imgURL:"https://beyondwords.life/wp-content/uploads/2018/03/girl-in-spain-1140x700.jpg" ,
      type:'adventure',
      tags:['travel','airplane','flight','book']
      },
      {
        id:4,
      title:"Photography",
      description:"taking a pictures for nature",
      creater:"Nicéphore Niépce",
      imgURL:"https://www.discoverahobby.com/uploads/activity/227_1562578490.jpg",
      tags:['travel','nature','fashion','capture','photo','picture']
      },
      {
        id:5,
      title:"drawing",
      description:"Drawing can help improve the mood and reduce stress.",
      creater:"Albrecht Dürer",
      imgURL:"https://thumbs.dreamstime.com/b/art-painting-hobby-leisure-girl-drawing-picture-art-painting-hobby-creative-leisure-girl-drawing-picture-sitting-floor-123677461.jpg",
      tags:['draw','image','scetching']
      },
      {
        id:6,
      title:"hair styling",
      description:"It's a nice hobby that improve our own looks and other looks",
      creater:"Vidal Sassoon",
      imgURL:"https://mediazink.com/wp-content/uploads/2018/01/hair-styling-tools-flat-irons.jpg" ,
      type:"beaury and self care",
      tags:['haircare','color','makeover','transformation' ]
      },
      {
        id:7,
      title:"Acting",
      description:"It's nice to preform different kind of charecters ",
      creater:"thenian ruler Pisistratus",
      imgURL:"https://actinginlondon.co.uk/wp-content/uploads/2013/07/You-are-an-actor-the-star-of-this-business.jpg" ,
      type:"Performing Arts",
      tags:['act','actors','fans' ]
      },{
        id:8,
        title:"walking",
        description:"it's a great sport",
        creater:"Greece",
        imgURL:"https://static.oprah.com/2016/05/201605-orig-hiking-949x534.jpg",
      type:"sport",
    tags:['sport','hobby','miles'] }
    ];
    this.outPut="";
   }

  ngOnInit(): void {
  }
  findTitle(findTitle:string):void{
    let titleFind=document.getElementsByClassName('titleFind');
  for(let i=0;this.contentArray.length>=i;i++){
    console.log(this.contentArray[i].title , findTitle);
    if(this.contentArray[i].title.toLowerCase()==findTitle.toLowerCase()){
     this.outPut="this title is available in the content card";
 console.log('yeeee');
 break;
    }
    else{
    this.outPut= "this title is not available in the content card";
    }
  }
  }
}
