import { Component, OnInit } from '@angular/core';

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

  constructor() {
    // setInterval(() => (this.deshabilitado = false), 5000);
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

  sendData(): void {
    console.log(this.cliente);
  }
}
