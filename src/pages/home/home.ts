import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: Observable<firebase.User>;


  constructor(public navCtrl: NavController,
    private authProvider: AuthProvider,
  ){
    this.user = this.authProvider.user;
  }

  signOut(){
    this.authProvider.signOut();
    this.navCtrl.push('LoginPage');
  }

}
