import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the QrscannerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'qrscanner',
  templateUrl: 'qrscanner.html'
})
export class QrscannerComponent {

  options: BarcodeScannerOptions;

  constructor(public navCtrl: NavController, private qrScanner: BarcodeScanner) {}


  QRscan(){

    this.options = {
      showTorchButton: true,
      prompt: 'Scan the QR code on the table to join the meal'
    }
    this.qrScanner.scan(this.options).then(barcodeData => {
      this.navCtrl.push('MainPage')
     }).catch(err => {
         console.log('Error', err);
     });
    }
}
