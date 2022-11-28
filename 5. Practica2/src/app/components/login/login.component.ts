import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ilogin } from 'src/app/interfaces/ilogin';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('btnModal', { static: true })
  btnModal: ElementRef<HTMLButtonElement> = {} as ElementRef;

  credenciales: Ilogin = {
    email: '',
    password: '',
  };

  newUser: Ilogin = {
    email: '',
    password: '',
  };

  repeatPassword: string = '';

  displayErrorLogin: boolean = false;
  displayErrorRegister: boolean = false;
  displayErrorNumero: boolean = false;
  displayErrorLetra: boolean = false;
  displayPasswordsNoIguales: boolean = false;
  messageError: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private readonly validators: ValidatorsService
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService
      .login(this.credenciales.email, this.credenciales.password)
      .then((resp: any) => {
        if (resp.user.accessToken) {
          console.log(resp);
          localStorage.setItem('user', resp.user.email);
          this.router.navigateByUrl('/home');
          this.displayErrorLogin = false;
        } else {
          this.displayErrorLogin = true;
        }
      })
      .catch((err) => {
        console.log(err.message);
        this.displayErrorLogin = true;
      });
  }

  async createAccountUser(form: NgForm) {
    try {
      const resp: any = await this.authService.createNewUser(
        this.newUser.email,
        this.newUser.password
      );
      if (resp.user.accessToken) {
        this.btnModal.nativeElement.click();
        this.displayErrorRegister = false;
        form.reset();
      } else {
        this.displayErrorRegister = true;
        this.messageError = resp;
      }
    } catch (error: any) {
      console.log(error.message);
      this.displayErrorRegister = true;
      this.messageError = error.message;
    }
  }

  validarPass() {
    console.log('pass', this.newUser.password);
    if (!this.validators.validarUnNumero(this.newUser.password)) {
      this.displayErrorNumero = true;
    } else {
      this.displayErrorNumero = false;
    }

    if (!this.validators.validarUnaLetra(this.newUser.password)) {
      this.displayErrorLetra = true;
    } else {
      this.displayErrorLetra = false;
    }
  }

  passwordIguales() {
    if (
      !this.validators.passwordIguales(
        this.newUser.password,
        this.repeatPassword
      )
    ) {
      this.displayPasswordsNoIguales = true;
    } else {
      this.displayPasswordsNoIguales = false;
    }
  }
}
