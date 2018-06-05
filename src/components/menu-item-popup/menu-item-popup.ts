import { Component, Input } from '@angular/core';
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

  constructor(public navP: NavParams) {
    this.description = this.navP.get('description');
  }

}
