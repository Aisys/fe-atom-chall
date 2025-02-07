import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing.module';
import { PagesComponent } from './pages.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [PagesComponent],
})
export class PagesModule { }
