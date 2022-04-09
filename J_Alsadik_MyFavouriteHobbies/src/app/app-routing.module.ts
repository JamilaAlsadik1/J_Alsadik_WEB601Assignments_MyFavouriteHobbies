import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:"list/:id",
    component:ContentDetailComponent
  },
  { 
    path: "list",
    component: ContentListComponent
  },
  {
    path:"",
    component:ContentListComponent
  },
  { 
    path: "**", 
    component: PageNotFoundComponent
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