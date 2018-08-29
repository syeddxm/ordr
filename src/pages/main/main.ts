import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { menuItem } from '../../models/menuItem';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from '../../../node_modules/rxjs/Observable';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  menuItemsObject: Observable<menuItem[]>;
  menuCollection: AngularFirestoreCollection<menuItem>; //Firestore collection
  menuDocument: any;
  menu: menuItem[];
  loadedMenu: menuItem[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    this.menuCollection = this.afs.collection('restaurants/GUECfrWUPUQfxYtfvMyV/menu'); //ref()
    this.menuItemsObject = this.menuCollection.valueChanges();

    this.storeMenu();
  }


  storeMenu(){
    this.menuItemsObject.subscribe(data => {
      this.loadedMenu = data;
      this.menu = this.loadedMenu;
    });
  }

  initializeMenu(){
    this.menu = this.loadedMenu;
  }

  filterItems(event: any) {

    this.initializeMenu();

    let val = event.target.value;

    if (val && val.trim() !== ''){
      this.menu = this.menu.filter(function(item){
        return item.name.toLowerCase().includes(val.toLowerCase());
        
      });
    }
  }

}
