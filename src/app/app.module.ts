import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './Components/films/films.component';
import {HttpClientModule} from "@angular/common/http";
import { FilmItemComponent } from './Components/film-item/film-item.component';
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { DetailComponent } from './Components/detail/detail.component';




@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmItemComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
