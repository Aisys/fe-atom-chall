import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { firstValueFrom } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  async login() {
    await firstValueFrom(this.userService.postLogin(
      this.loginForm.controls.email.value, this.loginForm.controls.password.value
    )).then(valor => {
      if (valor && valor.token) {
        localStorage.setItem('token', valor.token);
        this.router.navigate(['app/user-tasks']);
      } else {
        // ERROR
      }
    });
  }

}
