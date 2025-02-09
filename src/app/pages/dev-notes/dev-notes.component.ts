import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dev-notes',
  templateUrl: 'dev-notes.component.html',
  styleUrls: ['dev-notes.component.scss']
})
export class DevNotesComponent {

  panelOpenState = false;
  userByEmail  = environment.services.apiUser + '/admin@admin.com';
  constructor() {}

}
