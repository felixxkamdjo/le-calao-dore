import { Component } from '@angular/core';

interface Testimonial {
  id: number,
  name: string,
  rating: number,
  text: string,
  context: string
}

@Component({
  selector: 'app-temoignages',
  imports: [],
  templateUrl: './temoignages.html',
  styleUrl: './temoignages.css',
})
export class Temoignages {
  public eyebrow: string = 'Avis clients';
  public title: string = 'Ce qu\'ils en disent';

  testimonials: Testimonial[] = [
    { id: 1, name: 'Aïssatou M.', context: 'Cliente depuis 2020', rating: 5, text: 'Le Ndolè est le meilleur de Douala, sans hésitation. Le service est chaleureux, comme à la maison.' },
    { id: 2, name: 'Jean-Pierre K.', context: 'Habitué du vendredi soir', rating: 4, text: 'Ambiance conviviale, portions généreuses et un accueil qui donne toujours envie de revenir entre amis.' },
    { id: 3, name: 'Christelle E.', context: 'Cliente depuis 2022', rating: 5, text: 'Un cadre magnifique en plein Akwa, une cuisine authentique et des prix justes. Mon adresse préférée à Douala.' }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getInitials(name: string): string {
    return name.split(' ').map(w => w[0]).join('').slice(0, 2);
  }
}
