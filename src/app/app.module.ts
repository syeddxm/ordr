import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { GooglePlus } from '@ionic-native/google-plus';
import { AuthProvider } from '../providers/auth/auth'; // We'll install this in the next section

const firebaseConfig = {
    apiKey: 'AIzaSyC4iuCHxkFSgKu8HHZtaQz84ZRgv8ZvOqM',
    authDomain: 'ordr1-67a39.firebaseapp.com',
    databaseURL: 'https://ordr1-67a39.firebaseio.com',
    projectId: 'ordr1-67a39',
    storageBucket: 'ordr1-67a39.appspot.com',
    messagingSenderId: '446430941161'
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig), // <-- firebase here
    AngularFireAuthModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    GooglePlus,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
