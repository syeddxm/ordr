import { Component, Input } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { MenuItemPopupComponent } from '../menu-item-popup/menu-item-popup';

/**
 * Generated class for the MenuItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-item',
  templateUrl: 'menu-item.html'
})
export class MenuItemComponent {

  @Input() name: string;
  @Input() image: string;
  @Input() description: string;
  @Input() price: number;
  @Input() halal: boolean;
  @Input() gluten: boolean;
  @Input() vegan: boolean;

  constructor(public popoverCtl: PopoverController) {
  }

  popoverClick(myEvent){
    let popover = this.popoverCtl.create(MenuItemPopupComponent, {description: this.description, price: this.price, halal: this.halal, gluten: this.gluten, vegan: this.vegan});

    popover.present({
//      ev: myEvent

    })
  }

}
