import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Credentials } from 'src/app/shared/model/credentials.model';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) { }

  form: FormGroup

  ngOnInit() {
    this.form = this.fb.group({
      username: '',
      password: '',
    });
  }

  onSubmit(value){
    let crendetials: Credentials = new Credentials;
    crendetials.password = value.password;
    crendetials.username = value.username;
    this.loginService.login(crendetials).subscribe(data => {
      this.router.navigate(['/'])
    }, error => {
      console.log("error")
    })
  }

}
