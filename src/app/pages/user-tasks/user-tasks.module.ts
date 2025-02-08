import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserTasksComponent } from './user-tasks.component';
import { RouterModule, Routes } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogTaskFormComponent } from './dialog-task-form/dialog-task-form.component';
import { MatInputModule } from '@angular/material/input';



const routes: Routes = [
  {
    path: '',
    component: UserTasksComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,

    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatDialogModule,

  ],
  declarations: [UserTasksComponent, DialogTaskFormComponent],
  exports: [RouterModule]
})
export class UserTasksModule { }
