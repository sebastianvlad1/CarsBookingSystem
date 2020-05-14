import { Component, OnInit } from '@angular/core';
import { RequestService } from 'app/_services/RequestService/request.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(public _requestService: RequestService, public fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    });
   }

  ngOnInit(): void {
  }

  login(){
    console.log("loghez..");
    
    var formData = new FormData();
    formData.append('username', this.form.get('username').value);
    formData.append('password', this.form.get('password').value);

    this._requestService.login(formData).subscribe(() => {
      console.log("login, date corect!!");
      localStorage.setItem('loggedin', "true");
      this.router.navigate(['/dashboard']);
    },(error) => {
      console.log("error: " + error);
    });
  }

}
