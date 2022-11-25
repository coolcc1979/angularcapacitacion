import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLog: FormGroup;
  
  constructor(
    private UserService: UserService,
    private router: Router
  ) {
    this.formLog = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    this.UserService.login(this.formLog.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['/dashboard']);

    })
    .catch(error=>console.log(error));
    
  }

  ngOnInit(): void {}
}
