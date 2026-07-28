import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  public heroImage: string = '/assets/hero-restaurant.jpeg';
  public eyebrow: string = 'Cuisine camerounaise, cœur d\'Akwa';
  public title: string = 'Des saveurs qui racontent Douala';
  public subtitle: string = 'Depuis 10 ans, Le Calao Doré réunit à table le Ndolè des grand-mères, le Poulet DG du dimanche et une hospitalité qui se transmet, plat après plat.';
}
