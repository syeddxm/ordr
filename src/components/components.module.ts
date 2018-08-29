import { NgModule } from '@angular/core';
import { GoogleAuthComponent } from './google-auth/google-auth';

import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { QrscannerComponent } from './qrscanner/qrscanner';
import { MenuItemComponent } from './menu-item/menu-item';
import { FriendsBarComponent } from './friends-bar/friends-bar';
import { MenuItemPopupComponent } from './menu-item-popup/menu-item-popup';
@NgModule({
	declarations: [GoogleAuthComponent,
    QrscannerComponent,
    MenuItemComponent,
    FriendsBarComponent,
    MenuItemPopupComponent],
	imports: [IonicModule, CommonModule],
	exports: [GoogleAuthComponent,
    QrscannerComponent,
    MenuItemComponent,
    FriendsBarComponent,
    MenuItemPopupComponent]
})
export class ComponentsModule {}
