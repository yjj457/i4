import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ItemsService} from "../../providers/items-service";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private items = [];

  constructor(public navCtrl: NavController,
              public itemsService: ItemsService) {
  }

  ngOnInit() {
    this.itemsService.getItems()
        .then((res) => this.items = this.items.concat(res));

  }

  change() {
    console.log(this.items.map(v => v.status));
  }

}
