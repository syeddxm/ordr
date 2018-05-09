import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

import {QrPage} from '../../pages/qr/qr';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {


  user: Observable<firebase.User>;


  constructor(
    public http: HttpClient,
    private afAuth: AngularFireAuth, 
    private gplus: GooglePlus,
    private platform: Platform,
  ) {
      
      this.user = this.afAuth.authState;

  }

  loginUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  async loginUserWithGoogle() : Promise<void>{
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
    } catch(err) {
      console.log(err)
    }
  }

  async nativeGoogleLogin(): Promise<void> {
    try {

      const gplusUser = await this.gplus.login({
        'webClientId': '446430941161-378fv6lt57e51vmb56l0lrlmoob6vrls.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })

      return await this.afAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      )


    } catch(err) {
      console.log(err)
    }
  }

  signupUser(email: string, password: string): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then( newUser => {
        firebase
        .database()
        .ref('/userProfile')
        .child(newUser.uid)
        .set({ email: email });
      });
  }

  signOut() {
    this.afAuth.auth.signOut();
    if (this.platform.is('cordova')) {
      this.gplus.logout();
    }

    //this.navCtrl.push(QrPage);


  }

}
