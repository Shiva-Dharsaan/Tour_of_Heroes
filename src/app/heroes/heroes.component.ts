import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms'
import { HeroService } from '../hero.service';
import {NgFor} from '@angular/common';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { MessageService } from '../message.service';
import { RouterOutlet ,RouterLink} from '@angular/router';
// In index.ts inside the 'heroes' directory
export * from './heroes.component';

@Component({
    selector: 'app-heroes',
    standalone: true,
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css',
    imports: [CommonModule, FormsModule, NgFor, HeroDetailComponent,RouterOutlet,RouterLink]
})
export class HeroesComponent {
  selectedHero?: Hero;
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
   }
   heroes: Hero[] = [];

  //  getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
