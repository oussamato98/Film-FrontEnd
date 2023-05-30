import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {film} from "../../Model/film";
import {FilmsService} from "../../Services/films.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  films !: film[] ;
  idFilm:number = 0;
   filmsJson = new FilmsService(this.http).getFilms().subscribe(data => {
    this.films = data.results;
    console.log(this.films)
  });

  constructor(public route : ActivatedRoute , private http : HttpClient) {
  }

  ngOnInit(): void {

      this.idFilm= this.route.snapshot.params['id'];

  }

}
