import { Component } from '@angular/core';
import { IonicPage, NavController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the AuthTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'AuthTabs'
})
@Component({
  selector: 'page-auth-tabs',
  templateUrl: 'auth-tabs.html'
})
export class AuthTabsPage {

  dashboardPageRoot = 'DashboardPage'
  profilePageRoot = 'ProfilePage'


  constructor(public navCtrl: NavController, public appCtrl: App) {}

  logout(){
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }


}
