import { Component, Input } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { FriendsBarComponent } from '../friends-bar/friends-bar';
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

  constructor(public popoverCtl: PopoverController) {
  }

  popoverClick(myEvent){
    let popover = this.popoverCtl.create(MenuItemPopupComponent, {description: this.description});

    popover.present({
//      ev: myEvent

    })
  }

}
