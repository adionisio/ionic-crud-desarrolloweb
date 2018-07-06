import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the UserFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-form',
  templateUrl: 'user-form.html'
})
export class UserFormComponent {

  @Input() user: {username?: string, email?: string, password?: string};
  @Input() isUpdate: boolean;
  @Output() fireAction: EventEmitter<any> = new EventEmitter<any>();
  
  submitBtn: string;
  isSubmited: boolean = false;

  constructor() {

  }

  ngOnInit(){
    this.submitBtn = this.isUpdate ? "Update" : "Save";
  }

  processUser(): void{
    this.isSubmited = true;
    this.fireAction.emit(this.user);
  }

}
