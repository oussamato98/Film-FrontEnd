import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {film} from "../../Model/film";

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent {

  @Input() film: any;

  constructor(private route: ActivatedRoute,
              private router : Router) {
}

  toDetail(f:film) {
    this.router.navigateByUrl("/details/"+f.id);
  }
}
