import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';
import { HeroesService } from '../services/heroes.service';
import { Page } from '@ngrx/data';

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // heroes$: Observable<Hero[]>;
  heroesPage$: Observable<Page<Hero>>;

  constructor(private heroesSvc: HeroesService) {
    // this.heroes$ = heroesSvc.getWithQuery({});
    this.heroesPage$ = heroesSvc.getPageWithQuery({});
  }

  ngOnInit(): void {}
}
