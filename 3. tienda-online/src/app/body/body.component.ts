import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidatorsService } from '../services/validators.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  cliente = {
    nombre: '',
    producto: '',
    precio: 0,
    comentarios: '',
  };

  deshabilitado: boolean = true;

  clientes: string[] = [
    'Walter White',
    'Saul Godman',
    'Lalo Salamanca',
    'JS Vargas',
  ];

  formReactive: FormGroup = undefined!;

  constructor(
    private formBuilder: FormBuilder,
    private validators: ValidatorsService
  ) {
    this.createForm();
    this.cargarData();
    this.createListeners();
  }

  ngOnInit(): void {}

  selectClient(value: any): void {
    console.log('value', value.target.value);

    if (!this.deshabilitado) {
      this.deshabilitado = true;
    } else {
      setInterval(() => (this.deshabilitado = false), 5000);
    }

    switch (value.target.value) {
      case '1':
        this.cliente.producto = 'Iphone 14 pro max';
        this.cliente.precio = 1450;
        break;
      case '2':
        this.cliente.producto = 'Samsung a73';
        this.cliente.precio = 450;
        break;
      case '3':
        this.cliente.producto = 'Xiaomi redmi note 11 pro plus';
        this.cliente.precio = 350;
        break;
      case '4':
        this.cliente.producto = 'Huawei 12 lite';
        this.cliente.precio = 487;
        break;
      default:
        this.cliente.producto = '';
        this.cliente.precio = 0;
    }
  }

  createForm() {
    this.formReactive = this.formBuilder.group(
      {
        nombre: ['', [Validators.required, Validators.minLength(5)]],
        apellido: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            this.validators.noApellidoCorrea,
          ],
        ],
        correo: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
        ],
        usuario: ['', [Validators.required], [this.validators.existeUsuario]],
        password1: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            this.validators.validarLetraMayusPassword,
            this.validators.validarNumeroPass,
          ],
        ],
        password2: ['', [Validators.required]],
        direccion: this.formBuilder.group({
          provincia: ['', [Validators.required]],
          ciudad: ['', [Validators.required]],
        }),
        pasatiempos: this.formBuilder.array([]),
      },
      {
        validators: this.validators.passwordIguales('password1', 'password2'),
      }
    );
  }

  get nombreNoValido() {
    return (
      this.formReactive.get('nombre')?.invalid &&
      this.formReactive.get('nombre')?.touched
    );
  }

  get apellidoNoValido() {
    return (
      this.formReactive.get('apellido')?.invalid &&
      this.formReactive.get('apellido')?.touched
    );
  }

  get correoNoValido() {
    return (
      this.formReactive.get('correo')?.invalid &&
      this.formReactive.get('correo')?.touched
    );
  }

  get usuarioNoValido() {
    return (
      this.formReactive.get('usuario')?.invalid &&
      this.formReactive.get('usuario')?.touched &&
      this.formReactive.get('usuario')?.errors?.['required']
    );
  }

  get password1NoValido() {
    return (
      this.formReactive.get('password1')?.invalid &&
      this.formReactive.get('password1')?.touched
    );
  }

  get minlengthPassword() {
    return (
      this.formReactive.get('password1')?.errors?.['minlength']
    );
  }

  get invalidLetraMayus() {
    return (
      this.formReactive.get('password1')?.errors?.['noLetraMayus']
    );
  }

  get invalidNumero() {
    return (
      this.formReactive.get('password1')?.errors?.['noNumero']
    );
  }

  get password2NoValido() {
    return (
      this.formReactive.get('password2')?.invalid &&
      this.formReactive.get('password2')?.touched
    );

    //Validación manual
    // const password1 = this.formReactive.get('password1')?.value;
    // const password2 = this.formReactive.get('password2')?.value;

    // if (password1 === password2) {
    //   return false;
    // } else {
    //   return true;
    // }
  }

  get provinciaNoValida() {
    return (
      this.formReactive.get('direccion.provincia')?.invalid &&
      this.formReactive.get('direccion.provincia')?.touched
    );
  }

  get ciudadNoValida() {
    return (
      this.formReactive.get('direccion.ciudad')?.invalid &&
      this.formReactive.get('direccion.ciudad')?.touched
    );
  }

  get pasatiempos() {
    return this.formReactive.get('pasatiempos') as FormArray;
  }

  save() {
    console.log(this.formReactive);
    if (this.formReactive.valid) {
      console.log('Formulario Válido');
      console.log(this.formReactive.value);

      this.formReactive.reset({
        nombre: 'Nuevo nombre',
        apellido: 'Nuevo apellido',
      });
    } else {
      console.log('Formulario Inválido');
      Object.values(this.formReactive.controls).forEach((x) => {
        if (x instanceof FormGroup) {
          Object.values(x.controls).forEach((y) => y.markAsTouched());
        } else {
          x.markAsTouched();
        }
      });
      return;
    }
  }

  addPasatiempo() {
    this.pasatiempos.push(
      this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(5),
      ])
    );
  }

  removePasatiempo(i: number) {
    this.pasatiempos.removeAt(i);
  }

  cargarData() {
    //Exige todos los valores de los controles
    // this.formReactive.setValue({
    //Solo necesita de los que se requira
    this.formReactive.reset({
      nombre: 'Juan Pablo',
      apellido: 'Correa Herrera',
      correo: 'correo@correo.com',
      direccion: {
        provincia: 'Loja',
        ciudad: 'Loja',
      },
    });
    ['1', '2'].forEach((element: string) =>
      this.pasatiempos.push(
        this.formBuilder.control(element, [
          Validators.required,
          Validators.minLength(5),
        ])
      )
    );
  }

  createListeners() {

console.log(this.createListeners)

    this.formReactive.valueChanges.subscribe((value) => {
      console.log('valueChanges: ' , value);
    });
    this.formReactive.statusChanges.subscribe((value: any) => {
      console.log('statusChanges: ' , { ...value });
    });
    this.formReactive.get('nombre')?.valueChanges.subscribe((value) => {
      console.log('nombre: ' , value);
    });
  }
}
