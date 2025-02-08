import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { UserService } from '../../shared/services/user.service';

function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.get('password');
    const passwordConf = control.get('passwordConf');

    if (password && passwordConf && password.value !== passwordConf.value) {
      return { passwordMismatch: true };
    }

    return null;
  };
}

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.scss']
})
export class SignupComponent {

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    passwordConf: new FormControl('', Validators.required),
    names: new FormControl('', [Validators.required]),
    lastNames: new FormControl('', Validators.required),
  }, passwordMatchValidator());

  constructor(private router: Router, private userService: UserService) { }

  async signup() {

    await firstValueFrom(this.userService.postSignup(
      this.signupForm.controls.names.value, this.signupForm.controls.lastNames.value,
          this.signupForm.controls.email.value, this.signupForm.controls.password.value
        )).then(resp => {
          if (resp && resp.token) {
            localStorage.setItem('token', resp.token);
            this.router.navigate(['app/user-tasks']);
          } else {
            // ERROR
          }
        });
  }

}
