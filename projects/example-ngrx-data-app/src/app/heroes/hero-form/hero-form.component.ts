import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { Observable } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent implements OnInit {
  hero$: Observable<Hero>;

  constructor(
    private heroesSvc: HeroesService,
    route: ActivatedRoute,
    private location: Location
  ) {
    this.hero$ = heroesSvc
      .getByKey(route.snapshot.params.id)
      .pipe(map((h) => ({ ...h })));
  }

  ngOnInit(): void {}

  save(form: NgForm, hero: Hero) {
    if (form.invalid) {
      return;
    }

    this.heroesSvc
      .update(hero)
      .pipe(first())
      .subscribe(() => this.location.back());
  }
}
