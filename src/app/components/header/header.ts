import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public isMenuOpen: boolean = false;
  public activeLink: string = 'Accueil';
  public links: NavLink[] = [
    { label: 'Accueil', fragment: 'header' },
    { label: 'Menu', fragment: 'menu' },
    { label: 'Témoignages', fragment: 'testimony' },
    { label: 'Horaires', fragment: 'opening-hours' },
    { label: 'Contact', fragment: 'contact' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActive(link: string) {
    this.activeLink = link;
    this.isMenuOpen = false;
  }
}
