import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { UserAddPage } from '../user-add/user-add';
import { UsersEditPage } from '../users-edit/users-edit';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name : "DashboardPage"
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  public users: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public usersProvider: UsersProvider,
  public alertCtrl: AlertController) {
    usersProvider.all().subscribe(users  =>{
      this.users = users;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  add(){
    console.log("Added!!!");
    this.navCtrl.push(UserAddPage);
  }

  detail(user){
    this.navCtrl.push('user-detail',{
      'id':user.id
    });
    
  }

  edit(user){
    this.navCtrl.push(UsersEditPage,{
      'id':user.id
    });    
  }

  remove(user){
    let confirm = this.alertCtrl.create({
      title: 'Eliminar usuario',
      subTitle: '¿Seguro que quieres realizar esta acción?',
      buttons: [
        {
          text: 'No',
          handler: ()=>{
            console.log('no');
          }
        },
        {
          text: 'Si',
          handler: () =>{
            this.usersProvider.delete(user.id).then(() =>{
              this.usersProvider.all().subscribe((users) =>{
                this.users = users;
              })
            });
          }
        }
      ]
    });
    confirm.present();
  }

}
