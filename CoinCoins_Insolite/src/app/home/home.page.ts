import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items;
  isItemAvailable = false;

  initializeItems(){
  this.items = ["Ram","gopi", "dravid"];
  }

  getItems(ev: any) {
  // Reset items back to all of the items
  this.initializeItems();

  // set val to the value of the searchbar
  const val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
  this.isItemAvailable = true;
  this.items = this.items.filter((item) => {
  return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  })
  }
}
}
