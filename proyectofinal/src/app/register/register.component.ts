import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../service/Authservice';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm?: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public Authservice: AuthService
  ) {}

  ngOnInit(): void {
    this.validarFormulario();
    this.createListeners();
  }
  samePassword(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];
      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }
    };
  }
  validarFormulario() {
    this.registerForm = this.formBuilder.group(
      {
        nombreUsuario: ['', Validators.required],
        apellidoUsuario: ['', Validators.required],
        telefonoUsuario: [
          '',
          Validators.required,
         
        ],
        emailUsuario: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
        ],
        password1Usuario: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(
              '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$'
            ),
          ],
        ],
        password2Usuario: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validators: this.samePassword('password1Usuario', 'password2Usuario'),
      }
    );
  }
  get telefonoinvalido() {
    return (
      this.registerForm?.get('telefonoUsuario')?.invalid &&
      this.registerForm?.get('telefonoUsuario')?.touched
    );
  }
  get nombreNoValido() {
    return (
      this.registerForm.get('nombreUsuario')?.hasError('required') &&
      this.registerForm.get('nombreUsuario')?.touched
    );
  }
  get apellidoNoValido() {
    return (
      this.registerForm.get('apellidoUsuario')?.hasError('required') &&
      this.registerForm.get('apellidoUsuario')?.touched
    );
  }
  get emailinvalido() {
    return (
      this.registerForm.get('emailUsuario')?.invalid &&
      this.registerForm.get('emailUsuario')?.touched
    );
  }
  get emailNoValido() {
    return (
      this.registerForm.get('emailUsuario')?.hasError('required') &&
      this.registerForm.get('emailUsuario')?.touched
    );
  }
  get emailNoValido2() {
    return (
      this.registerForm.get('emailUsuario')?.hasError('email') &&
      this.registerForm.get('emailUsuario')?.touched
    );
  }
  get emailNoValido3() {
    return (
      this.registerForm.get('emailUsuario')?.hasError('pattern') &&
      this.registerForm.get('emailUsuario')?.touched
    );
  }
  get password1invalid() {
    return (
      this.registerForm.get('password1Usuario')?.invalid &&
      this.registerForm.get('password1Usuario')?.touched
    );
  }
  get password1NoValido() {
    return (
      this.registerForm.get('password1Usuario')?.hasError('required') &&
      this.registerForm.get('password1Usuario')?.touched
    );
  }
  get password1NoValido2() {
    return (
      this.registerForm.get('password1Usuario')?.hasError('minlength') &&
      this.registerForm.get('password1Usuario')?.touched
    );
  }
  get password1NoValido3() {
    return (
      this.registerForm.get('password1Usuario')?.hasError('pattern') &&
      this.registerForm.get('password1Usuario')?.touched
    );
  }
  createListeners() {
    this.registerForm.valueChanges.subscribe((value) => {
      console.log('valueChanges: ' + JSON.stringify(value));
    });
  }
  GuardarUsuario() {
    if (!this.registerForm.invalid) {
      this.Authservice.register({
        email: this.registerForm?.value.emailUsuario,
        password: this.registerForm?.value.password2Usuario,
        nombre: this.registerForm?.value.nombreUsuario,
        apellido: this.registerForm?.value.apellidoUsuario,
        telefono: this.registerForm?.value.telefonoUsuario,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
