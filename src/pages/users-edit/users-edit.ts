import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';

/**
 * Generated class for the UsersEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users-edit',
  templateUrl: 'users-edit.html',
})
export class UsersEditPage {

  id = this.navParams.get('id');
  public user: {username?: string, email?: string, password?: string} = {};

  constructor(public navCtrl: NavController, public navParams: NavParams
  ,public usersProvider:UsersProvider) {
    usersProvider.find(this.id).subscribe((user) =>{
      this.user = user[0];
      this.user.password = '';
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersEditPage');
  }

  update(user){
    this.usersProvider.update(user).then((success)=>{
      this.navCtrl.setRoot('DashboardPage');
    });
  }

}
