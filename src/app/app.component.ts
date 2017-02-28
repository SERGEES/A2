import { Component, OnInit } from '@angular/core';
import { HeroService } from './heroes/hero.service';
import { Hero } from './heroes/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{
  selectedHero: Hero;
  heroes: Hero[];

  constructor (private  heroService: HeroService) {
  }

  ngOnInit () {
    this.getHeroes();
  }

  getHeroes () {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  selectHero (hero : Hero) :void {
    this.selectedHero = hero;
  }
}
