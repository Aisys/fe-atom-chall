import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { firstValueFrom } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {

  loadingStatus = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private userService: UserService,
    private _snackBar: MatSnackBar,
  ) { }

  isLoading(): string {
    return this.loadingStatus ? 'flex' : 'none';
  }

  async login() {
    let error = true;
    this.loadingStatus = true;
    await firstValueFrom(this.userService.postLogin(
      this.loginForm.controls.email.value, this.loginForm.controls.password.value
    )).then(valor => {
      if (valor && valor.token) {
        localStorage.setItem('token', valor.token);
        error = false;
        this.router.navigate(['app/user-tasks']);
      }
    }).catch(err => {
      console.warn(err);
    });
    this.loadingStatus = false;

    if (error) {
      this._snackBar.open('No se pudo crear el usuario. ¿Desea redireccionar al registro?', 'Aceptar', {
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
        duration: 3000,
      }).onAction().subscribe(() => {
        this.router.navigate(['signup']);
      });
    }
  }

}
