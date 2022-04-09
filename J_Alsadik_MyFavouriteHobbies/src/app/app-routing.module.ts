import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';

const routes: Routes = [
  {
    path:"content/:id",
    component:ContentDetailComponent
  },
  { 
    path: "content",
    component: ContentListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], // this hooks up our routes so they work
  exports: [RouterModule]
})
export class AppRoutingModule { }