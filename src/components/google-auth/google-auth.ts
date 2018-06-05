import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';
import { GooglePlus } from '@ionic-native/google-plus';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the GoogleAuthComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'google-auth',
  templateUrl: 'google-auth.html'
})
export class GoogleAuthComponent {


  user: Observable<firebase.User>;

  constructor(private authF: AuthProvider, 
              private fireAuth: AngularFireAuth,
              private navCtrl: NavController  
            ) {

      this.user = this.fireAuth.authState;

  }


  async googleLogin() {

    this.authF.loginUserWithGoogle()
      .then( (result)=>{
        this.navCtrl.setRoot('QrPage');
      }
      );
  }

  signOut() {
    this.authF.signOut();
  }

}
