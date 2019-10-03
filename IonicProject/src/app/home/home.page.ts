import { Component } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListPage } from '../list/list.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public username: string;
  public password: string;
  public text: string;
  constructor(public navCtrl: NavController,
              public actionSheetController : ActionSheetController) { 

  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '장르별',
      buttons: [{
        text: '범죄/공포',
        role: 'destructive',
        icon: 'hammer',
        handler: () => {
          
        }
      }, {
        text: 'SF/판타지',
        icon: 'planet',
        handler: () => {
          
        }
      }, {
        text: '로맨스/멜로',
        icon: 'heart',
        handler: () => {
         
        }
      }, {
        text: '액션/모험',
        icon: 'bonfire',
        handler: () => {
          
        }
      }, {
        text: '전쟁/재난',
        icon: 'nuclear',
        handler: () => {
          
        }
      }, {
          text: '애니메이션',
          icon: 'logo-snapchat',
          handler: () => {
            
        }
      }]
    });
    await actionSheet.present();
  }

  login() {
    console.log('Username: ' + this.username);

    console.log('Psassword: ' + this.password);
  }

  goTodo() {
    this.navCtrl.navigateForward('/todo-details');  // ionic v3 : push >> ionic v4 : navigateForward
  }

  //goList() {
  //  this.navCtrl.navigateForward('/list');  // ionic v3 : push >> ionic v4 : navigateForward
  //}

  goMain() {
    this.navCtrl.navigateForward('/main');  // ionic v3 : push >> ionic v4 : navigateForward
  }

}
