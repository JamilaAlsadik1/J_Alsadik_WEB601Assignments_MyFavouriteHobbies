import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { content } from '../helper-files/content-interface';
import { HobbyService } from '../services/hobby.service';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
 hobbies?: content;
 id?:number;
  constructor(private route:ActivatedRoute, private hobbyService:HobbyService) { }
  clickevent(){
    console.log(`the title: ${this.hobbies?.title} and the id is : ${this.hobbies?.id}`);
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(p=>{
      this.id=Number(p.get('id')??"0");
      this.hobbyService.getContentItem(this.id).subscribe(
        (c)=>{
          this.hobbies=c;
        }
      );
    });
  }

}
