import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UsersProvider} from "../../providers/users/users";

/**
 * Generated class for the UsersDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'user-detail',
  segment: 'detail/:id'
})
@Component({
  selector: 'page-users-detail',
  templateUrl: 'users-detail.html',
})
export class UsersDetailPage {

  public user = null;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usersProvider: UsersProvider
  ) {
    const id = this.navParams.get('id');
    usersProvider.find(id).subscribe((user) => {
      this.user = user[0];
    })
  }


}
