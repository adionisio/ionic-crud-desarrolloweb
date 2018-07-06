import { Component, Input } from '@angular/core';

/**
 * Generated class for the UserDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailComponent {

  @Input() user: {username?: string, email?: string, password?: string};

  constructor() {
  }

}
