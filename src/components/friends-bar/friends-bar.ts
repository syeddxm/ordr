import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the FriendsBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'friends-bar',
  templateUrl: 'friends-bar.html'
})
export class FriendsBarComponent {

  people: any;
  data: any;

  constructor(private http: HttpClient) {
    this.load()
      .then(data => {
      this.people = data.results;
      console.log(this.people);
  });
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
  
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('https://randomuser.me/api/?results=10')
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
