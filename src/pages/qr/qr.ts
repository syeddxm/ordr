import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the QrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr',
  templateUrl: 'qr.html',
})
export class QrPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authF: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrPage');
  }

  goToMenu(){
    this.navCtrl.setRoot('MainPage');
  }

  signOut() {
    this.authF.signOut()
    .then((result) => {
      this.navCtrl.setRoot('LoginPage');
    });
  }

}
