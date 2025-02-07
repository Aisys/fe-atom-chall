import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dev-notes',
  templateUrl: 'dev-notes.component.html',
  styleUrls: ['dev-notes.component.scss']
})
export class DevNotesComponent {

  constructor(private router: Router) {
  }

}
