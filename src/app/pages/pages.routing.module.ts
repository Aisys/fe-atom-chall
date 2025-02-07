import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';


export const PATH_USER_TASKS: string = 'user-tasks';
export const PATH_DEV_NOTES: string = 'dev-notes';

const routes: Routes = [
  {
    path: 'app',
    component: PagesComponent,
    children: [
      {
        path: PATH_USER_TASKS,
        loadChildren: () => import('./user-tasks/user-tasks.module').then(m => m.UserTasksModule)
      },
      {
        path: PATH_DEV_NOTES,
        loadChildren: () => import('./dev-notes/dev-notes.module').then(m => m.DevNotesModule)
      },
      {
        path: '',
        redirectTo: `/app/${PATH_USER_TASKS}`,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo:  `/app/${PATH_USER_TASKS}`,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
