import { NgModule } from '@angular/core';
import { GoogleAuthComponent } from './google-auth/google-auth';

import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { QrscannerComponent } from './qrscanner/qrscanner';
@NgModule({
	declarations: [GoogleAuthComponent,
    QrscannerComponent],
	imports: [IonicModule, CommonModule],
	exports: [GoogleAuthComponent,
    QrscannerComponent]
})
export class ComponentsModule {}
