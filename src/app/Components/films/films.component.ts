import {Component, OnInit} from '@angular/core';
import {FilmsService} from "../../Services/films.service";
import {HttpClient} from "@angular/common/http";
import {film} from "../../Model/film";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit{
  films : any ;
  searchText = '' ;

  constructor(private fs : FilmsService , private http : HttpClient) {
  }
  ngOnInit(): void {
    let filmsJson = new FilmsService(this.http).getLivres("l").subscribe(data => {
      this.films = data.results;
      console.log(this.films)
    });
  }

}
