import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private heroesSvc: HeroesService) {
    this.heroes$ = heroesSvc.getAll();
  }

  ngOnInit(): void {}
}
