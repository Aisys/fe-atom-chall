import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserTasksComponent } from './user-tasks.component';
import { RouterModule, Routes } from '@angular/router';

import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

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
    MatTableModule, 
    MatCheckboxModule

  ],
  declarations: [UserTasksComponent],
  exports: [RouterModule]
})
export class UserTasksModule { }
