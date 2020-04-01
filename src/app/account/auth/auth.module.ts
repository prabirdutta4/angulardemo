import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FeatherIconDirective } from '../../feather-icon.directive';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthRoutingModule } from './auth-routing.module';
import { UIModule } from '../../shared/ui/ui.module';

@NgModule({
  declarations: [LoginComponent, SignupComponent,FeatherIconDirective],
  imports: [
    CommonModule,
	 ReactiveFormsModule,
	 FormsModule,
	AuthRoutingModule,
	 NgbAlertModule,
	 UIModule
  ]
})
export class AuthModule { }
