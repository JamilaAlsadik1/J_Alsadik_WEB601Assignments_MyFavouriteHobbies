import { Component, OnInit, Output ,EventEmitter, ViewChild} from '@angular/core';

import { content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
@Output() newHobbyEvent:EventEmitter<content>=new EventEmitter<content>();
newContent?:content;
errorMsg?:string;
@ViewChild('id') inputId: any;
@ViewChild('title') inputTitle: any;
@ViewChild('description') inputDescription: any;
@ViewChild('creater') inputCreater: any;
@ViewChild('imgUrl') inputImgUrl: any;
@ViewChild('type') inputType: any;
@ViewChild('tags') inputTags: any;
  constructor() {
   
   }

  ngOnInit(): void {
  }
 
   addcontent(id:any,title:any,description:any,creater:any,imgUrl:any,type:any,tags:any){
   
   this.newContent={
     id:parseInt(id),
     title:title,
     description:description,
     creater:creater,
     imgURL:imgUrl,
     type:type,
     tags:tags.split(","),
   }
   let newPromise=new Promise((success,fail)=>{
      let testPass=false;
      if(id.length>0 && title.length>0 && description.length>0 &&creater.length>0 ){
        testPass=true;
        // success("sucess");
        
      }
      else{
        testPass=false;
        // fail("fail");
      }
      if (testPass) {
        this.errorMsg="";
        success("The addition successful for the hobby title :" + " " + this.newContent?.title);
        this.newHobbyEvent.emit(this.newContent);
        this.inputId.nativeElement.value="";
        this.inputTitle.nativeElement.value="";
        this.inputDescription.nativeElement.value="";
        this.inputImgUrl.nativeElement.value="";
        this.inputCreater.nativeElement.value="";
        this.inputType.nativeElement.value="";
        this.inputTags.nativeElement.value="";
        
        
      }
      else {
        fail("the content failed to be added , the required field must be added it (required field is id , title ,description and creater )");
      }
  }
  
  );
   
  newPromise.then((sucess)=>{
    console.log(sucess);
    
  })
  .catch((fail)=>this.errorMsg=fail)

  

 };


}
