import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'add',component:AddPublicationComponent},
  {path:'detail/:description',component:DetailsComponent},
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
