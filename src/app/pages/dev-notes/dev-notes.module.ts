import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevNotesComponent } from './dev-notes.component';
import { RouterModule, Routes } from '@angular/router';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';



const routes: Routes = [
  {
    path: '',
    component: DevNotesComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatExpansionModule,
    MatListModule,
  ],
  declarations: [DevNotesComponent],
  exports: [RouterModule]
})
export class DevNotesModule { }
