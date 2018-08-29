import { Component } from '@angular/core';
import {
  IonicPage,
  Loading,
  LoadingController,
  NavController,
  AlertController,
} from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loggedIn: string;

  public loginForm: FormGroup;
  public signupForm: FormGroup;

  public loading: Loading;
  public loginToggle: Boolean = true;

  public email: String;

  private user: Observable<firebase.User>;



  constructor(  public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    public formBuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    
    ) {

    
    this.loginForm = formBuilder.group({
      email: ['',
      Validators.compose([Validators.required])],
      password: ['',
      Validators.compose([Validators.required])]
    });

    this.signupForm = formBuilder.group({
      email: ['',
      Validators.compose([Validators.required])],
      password: ['',
      Validators.compose([Validators.minLength(6), Validators.required])],
      confirmPassword: ['',
      Validators.compose([Validators.required])]
    }, {validator: this.matchingPasswords('password', 'confirmPassword')});

    this.user = this.afAuth.authState;

    
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string){
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey].value;
      let confirmPassword = group.controls[confirmPasswordKey].value;

      if (password != confirmPassword){
        return {mismatchedPasswords: true};
      }
    }
  }



  loginUser() {
    this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
    .then((result) => {
        
      this.navCtrl.setRoot('QrPage');
    }
      , error => {
        let alert = this.alertCtrl.create({
          title: 'Login Error',
          message: error + ' Please try again',
          buttons: ['OK']
        });
        alert.present();
      }
    );

  }

  signupUser() {
    this.authProvider.signupUser(this.signupForm.value.email, this.signupForm.value.password)
    .then((result) => {
      this.navCtrl.setRoot('QrPage');
    });
  }



  ionViewDidLoad() {

    console.log("View Load");

    this.user.subscribe((userObserve) => {
      console.log(userObserve);

      if (userObserve != null) {
        this.navCtrl.setRoot('QrPage');
      }
    });

  }

  signInToggle(){
    this.loginToggle = !this.loginToggle;
  }



}
