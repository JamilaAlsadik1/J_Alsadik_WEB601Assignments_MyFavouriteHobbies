import { content } from "./content-interface";

export class ContentList{
    private item: content[];
    constructor(){
        this.item=[];
    }
    get _item():content[]{
        return this.item;
    }
    set _item(newItem:content[]){
        this.item=newItem;
    }
   addItem(newItem:content){
         this.item.push(newItem);
   } 
   countItems(){
       return this.item.length;
   }
   showItem(i:number):string{
       if(i>=this.countItems()){
           return `there is nothing in the list at index ${i}`;
       }
       else{
       return `title : ${this.item[i].title} <br>
               creater: ${this.item[i].creater} <br>
               description:${this.item[i].description}<br>
               image URL:<img height='200' width='200' src='${this.item[i].imgURL}'/> <br>
               type: ${this.item[i].type}`;
            }
   }
}