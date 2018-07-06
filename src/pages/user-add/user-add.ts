import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';


@Component({
  selector: 'page-user-add',
  templateUrl: 'user-add.html',
})
export class UserAddPage {

  public user: {username?: string, email?: string, password?: string} = {};
  constructor(public navCtrl: NavController, private userProvider: UsersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAddPage');
  }

  save(){
    this.userProvider.add(this.user).then((success)=>{
      this.navCtrl.setRoot('DashboardPage');
    })
  }

}
