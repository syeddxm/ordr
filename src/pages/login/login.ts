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

  ordr_logo: string;

  user: Observable<firebase.User>;


  public loginForm: FormGroup;
  public signupForm: FormGroup;

  public loading: Loading;


  constructor(  public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    public formBuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    ) {

    this.ordr_logo = "assets/imgs/branding/ordr_logo.png";
    
    this.loginForm = formBuilder.group({
      email: ['',
      Validators.compose([Validators.required])],
      password: ['',
      Validators.compose([Validators.minLength(6), Validators.required])]
    });

    this.signupForm = formBuilder.group({
      email: ['',
      Validators.compose([Validators.required])],
      password: ['',
      Validators.compose([Validators.minLength(6), Validators.required])]
    });

    this.user = this.afAuth.authState;
  }



  loginUser() {
    this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .then((result) => {
        
        this.navCtrl.push('QrPage');
      }
    );

  }

  signupUser() {
    this.authProvider.signupUser(this.signupForm.value.email, this.signupForm.value.password)
  }


  ionViewDidLoad() {
    console.log("View Load");

    console.log(this.afAuth.authState);

    if (this.afAuth.auth.currentUser) {
      this.navCtrl.setRoot('QrPage');
    }
  }



}
