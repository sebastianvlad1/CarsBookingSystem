import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newrequest',
  templateUrl: './newrequest.component.html',
  styleUrls: ['./newrequest.component.css']
})
export class NewrequestComponent implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder, private httpClient: HttpClient) { 
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
    console.log(this.form.value);
    var formData = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('reason', this.form.get('reason').value);
    formData.append('pickupDate', this.form.get('pickupDate').value);
    formData.append('pickupTime', this.form.get('pickupTime').value);
    formData.append('returnDate', this.form.get('returnDate').value);
    formData.append('returnTime', this.form.get('returnTime').value);
    formData.append('destination', this.form.get('destination').value);

    this.httpClient.post('http://localhost:5000/api/request/addrequest', formData).subscribe(() => {
      console.log("am adaugat.");
    });
  }
}
