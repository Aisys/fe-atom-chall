
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),

    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
  ],
  declarations: [SignupComponent],
  exports: [SignupComponent],
})
export class SignupModule { }
