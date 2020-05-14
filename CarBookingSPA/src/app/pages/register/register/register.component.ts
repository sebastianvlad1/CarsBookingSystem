import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from 'app/_services/RequestService/request.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(public _requestService: RequestService, public fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    });
   }

  ngOnInit(): void {
  }

  register(){
    console.log("inregistrez..");
    
    var formData = new FormData();
    formData.append('username', this.form.get('username').value);
    formData.append('password', this.form.get('password').value);
    console.log(formData);

    this._requestService.register(formData).subscribe(() => {
      console.log("registered!!");
      localStorage.setItem('loggedin', "true");
      this.router.navigate(['/dashboard']);
    },(error) => {
      console.log("error: " + error);
    });
  }

}
