import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.scss']
})
export class SignupComponent {

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['tabs', 'cupboard']);
  }

}
