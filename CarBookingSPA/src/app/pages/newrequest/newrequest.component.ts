import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newrequest',
  templateUrl: './newrequest.component.html',
  styleUrls: ['./newrequest.component.css']
})
export class NewrequestComponent implements OnInit {
  form: FormGroup;
  destinations = [
    {"value":"Oradea"},
    {"value":"Timisoara"},
    {"value":"Arad"}
  ];
  reasons = [
    {"value": "reason1"},
    {"value": "reason2"},
    {"value": "reason3"},
    {"value": "reason4"}
  ];
  constructor(public fb: FormBuilder, private httpClient: HttpClient, private datePipe: DatePipe, private router: Router) { 
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
  transformDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  submitForm() {
    console.log(this.form.value);
    var formData = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('reason', this.form.get('reason').value);
    formData.append('pickupDate', this.transformDate(this.form.get('pickupDate').value));
    formData.append('pickupTime', this.form.get('pickupTime').value);
    formData.append('returnDate', this.transformDate(this.form.get('returnDate').value));
    formData.append('returnTime', this.form.get('returnTime').value);
    formData.append('destination', this.form.get('destination').value);

    this.httpClient.post('http://localhost:5000/api/request/addrequest', formData).subscribe(() => {
      console.log("am adaugat.");
      this.router.navigate(['/dashboard']);
    });
  }
}
