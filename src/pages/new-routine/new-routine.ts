import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewRoutinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-routine',
  templateUrl: 'new-routine.html',
})
export class NewRoutinePage {

  message: string;
  name: string = "Let's cardio!";

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.message = this.navParams.get('message');
    console.log(this.message);
  }

  goBack(): void {
    this.navCtrl.pop();
  }

  saveRoutine(): void {
    console.log(this.name);
  }

}
