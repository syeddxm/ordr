import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Platform, AlertController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

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
    private alertCtrl: AlertController,
  ) {
      
      this.user = this.afAuth.authState;

  }

  loginUser(email: string, password: string): Promise<any> {
    return (
      firebase.auth().signInWithEmailAndPassword(email, password)
      
    );
  }

  async loginUserWithGoogle() : Promise<void>{
    if (this.platform.is('cordova')) {
      return this.nativeGoogleLogin();
    } else {
      return this.webGoogleLogin();
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await this.afAuth.auth.signInWithPopup(provider);
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
      }, error => {
        let alert = this.alertCtrl.create({
          title: 'Sign Up Error',
          message: error + ' Please try again',
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }

  signOut() : Promise<any>{
    
    if (this.platform.is('cordova')) {
      console.log('cordova');
      return this.gplus.logout()

    } else {
      return this.afAuth.auth.signOut()
    }

  }

}
