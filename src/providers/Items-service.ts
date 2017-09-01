import {Injectable} from  '@angular/core';
import {Http} from '@angular/http';
import {Events} from "ionic-angular/index";
import 'rxjs/add/operator/toPromise';

export class Item {
  id: string;
  status: boolean;
}

@Injectable()
export class ItemsService{

  constructor(public http: Http,
              public events: Events) {
  }

  getItems(): Promise<Item[]> {
    const url = './assets/data/items.json';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Item[])
      .catch(err => Promise.reject(err || 'err'));
  }

}
