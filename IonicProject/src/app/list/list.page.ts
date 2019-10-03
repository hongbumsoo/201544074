import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {

  public items : any;
  constructor(public navCtrl: NavController, public http:HttpClient) { 
    this.getData(); 
  }

  getData() {
    let url = 'http://jsonplaceholder.typicode.com/photos';
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items = result;
    });
  }
}
