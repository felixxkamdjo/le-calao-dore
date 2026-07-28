import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

interface Dish {
  id: number,
  name: string,
  description: string,
  price: number,
  category: 'entree' | 'plat' | 'dessert',
  image: string
}

@Component({
  selector: 'app-menu',
  imports: [NgClass, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  public whatsappNumber: string = '2376000000';
  public eyebrow: string = 'À la carte';
  public title: string = 'Notre menu';
  public intro: string = 'Des recettes fidèles à la tradition, préparées chaque jour avec les produits frais du marché d\'Akwa.';

dishes: Dish[] = [
    { id: 1, name: 'Beignets haricots', description: 'Beignets de niébé croustillants, servis chauds avec une sauce pimentée maison.', price: 1500, category: 'entree', image: 'assets/dishes/dish-1.jpeg' },
    { id: 2, name: 'Folong', description: 'Salade de folon relevée à l\'huile de palme, oignons frais et jus de citron.', price: 2000, category: 'entree', image: 'assets/dishes/dish-2.jpeg' },
    { id: 3, name: 'Ndolè aux crevettes', description: 'Feuilles de ndolè mijotées à l\'arachide, crevettes fraîches du littoral.', price: 5500, category: 'plat', image: 'assets/dishes/dish-3.jpeg' },
    { id: 4, name: 'Poulet DG', description: 'Poulet fermier doré, plantain mûr caramélisé et légumes croquants du jardin.', price: 6000, category: 'plat', image: 'assets/dishes/dish-4.jpeg' },
    { id: 5, name: 'Eru aux écailles', description: 'Légume forestier finement ciselé, viande fumée et écailles de poisson séché.', price: 5000, category: 'plat', image: 'assets/dishes/dish-5.jpeg' },
    { id: 6, name: 'Mbongo Tchobi', description: 'Sauce noire aux épices sauvages, mijotée longuement avec du poisson braisé.', price: 5500, category: 'plat', image: 'assets/dishes/dish-6.jpeg' },
    { id: 7, name: 'Pain perdu coco', description: 'Brioche dorée au lait de coco, filet de miel et éclats de noix de coco grillée.', price: 2500, category: 'dessert', image: 'assets/dishes/dish-7.jpeg' },
    { id: 8, name: 'Bananes flambées', description: 'Plantain caramélisé au sucre de canne, flambé au rhum arrangé maison.', price: 2000, category: 'dessert', image: 'assets/dishes/dish-8.jpeg' },
  ];

  orderLink(dishName: string): string {
    const message = `Bonjour, je souhaite commander : ${dishName}`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
}
