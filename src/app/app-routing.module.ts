import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmsComponent} from "./Components/films/films.component";
import {DetailComponent} from "./Components/detail/detail.component";

const routes: Routes = [
  {path : "" , component : FilmsComponent } ,
  {path : "details/:id" , component : DetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
