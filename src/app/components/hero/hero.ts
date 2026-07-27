import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  public backgroundImage: string = '/assets/hero-restaurant.jpeg';
  public title: string = 'Saveurs authentiques du Cameroun';
  public subtitle: string = '15 ans de tradition culinaire à Douala';
}
