import { Component } from '@angular/core';

/**
 * Generated class for the MenuListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-list',
  templateUrl: 'menu-list.html'
})
export class MenuListComponent {

  foodItems: any;

  constructor() {

  }

  ngOnInit(){
    this.setItems();
  }

  setItems() {
    this.foodItems = [
      {
        name: 'Pizza',
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget augue commodo, vehicula odio vel, venenatis elit. Phasellus vestibulum venenatis massa vitae tempor. Vestibulum eu quam quam. Proin lobortis, leo ut efficitur mollis, arcu ex imperdiet massa, sit amet feugiat justo augue nec est."
      },
      {
        name: 'Spagetz',
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget augue commodo, vehicula odio vel, venenatis elit. Phasellus vestibulum venenatis massa vitae tempor. Vestibulum eu quam quam. Proin lobortis, leo ut efficitur mollis, arcu ex imperdiet massa, sit amet feugiat justo augue nec est."
      },
      {
        name: 'Pizza',
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget augue commodo, vehicula odio vel, venenatis elit. Phasellus vestibulum venenatis massa vitae tempor. Vestibulum eu quam quam. Proin lobortis, leo ut efficitur mollis, arcu ex imperdiet massa, sit amet feugiat justo augue nec est."
      },
      {
        name: 'Pizza',
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget augue commodo, vehicula odio vel, venenatis elit. Phasellus vestibulum venenatis massa vitae tempor. Vestibulum eu quam quam. Proin lobortis, leo ut efficitur mollis, arcu ex imperdiet massa, sit amet feugiat justo augue nec est."
      },
      {
        name: 'Pizza',
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget augue commodo, vehicula odio vel, venenatis elit. Phasellus vestibulum venenatis massa vitae tempor. Vestibulum eu quam quam. Proin lobortis, leo ut efficitur mollis, arcu ex imperdiet massa, sit amet feugiat justo augue nec est."
      },
      {
        name: 'Pizza',
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget augue commodo, vehicula odio vel, venenatis elit. Phasellus vestibulum venenatis massa vitae tempor. Vestibulum eu quam quam. Proin lobortis, leo ut efficitur mollis, arcu ex imperdiet massa, sit amet feugiat justo augue nec est."
      },
      {
        name: 'Pizza',
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget augue commodo, vehicula odio vel, venenatis elit. Phasellus vestibulum venenatis massa vitae tempor. Vestibulum eu quam quam. Proin lobortis, leo ut efficitur mollis, arcu ex imperdiet massa, sit amet feugiat justo augue nec est."
      },
      {
        name: 'Pizza',
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget augue commodo, vehicula odio vel, venenatis elit. Phasellus vestibulum venenatis massa vitae tempor. Vestibulum eu quam quam. Proin lobortis, leo ut efficitur mollis, arcu ex imperdiet massa, sit amet feugiat justo augue nec est."
      },
    ]
  }
  

  filterItems(event: any) {
    this.setItems();
    let val = event.target.value;

    if (val && val.trim() !== ''){
      this.foodItems = this.foodItems.filter(function(item){
        return item.name.toLowerCase().includes(val.toLowerCase());
        
      });
    }
  }

}
