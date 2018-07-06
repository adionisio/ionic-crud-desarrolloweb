import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { UserFormComponent } from './user-form/user-form';
import { UserDetailComponent } from './user-detail/user-detail';
@NgModule({
	declarations: [UserFormComponent,
    UserDetailComponent],
	imports: [],
	exports: [UserFormComponent,
	UserDetailComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
	
})
export class ComponentsModule {}
