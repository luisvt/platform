import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService extends EntityCollectionServiceBase<Hero> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Hero', serviceElementsFactory);
  }
}
