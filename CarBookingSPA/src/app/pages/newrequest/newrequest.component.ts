import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-newrequest',
  templateUrl: './newrequest.component.html',
  styleUrls: ['./newrequest.component.css']
})
export class NewrequestComponent implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder) { 
    this.form = this.fb.group({
      name: [''],
      reason: [''],
      pickupDate: [''],
      pickupTime: [''],
      returnDate: [''],
      returnTime: [''],
      destination: ['']
    })
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.form.value)
  }
}
