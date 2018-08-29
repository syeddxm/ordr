import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuItemPopupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-item-popup',
  templateUrl: 'menu-item-popup.html'
})
export class MenuItemPopupComponent {

  description: string;
  price: number;
  halal: boolean;
  gluten: boolean;
  vegan: boolean;

  constructor(public navP: NavParams) {
    this.description = this.navP.get('description');
    this.price = this.navP.get('price');
    this.gluten = this.navP.get('gluten');
    this.halal = this.navP.get('halal');
    this.vegan = this.navP.get('vegan');

    console.log(this.price + " "  + this.vegan);
  }

}
