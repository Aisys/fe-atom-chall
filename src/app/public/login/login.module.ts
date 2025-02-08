import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { UserService } from '../../shared/services/user.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    ReactiveFormsModule,

    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
  ],
  providers: [],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule { }
