import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { RequestService } from 'app/_services/RequestService/request.service';

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
  hours = [
    {"value": "12:00"},
    {"value": "12:30"},
    {"value": "13:00"},
    {"value": "13:30"},
    {"value": "14:00"},
    {"value": "14:30"},
    {"value": "15:00"},
    {"value": "15:30"},
    {"value": "16:00"},
    {"value": "16:30"},
    {"value": "17:00"},
    {"value": "17:30"},
    {"value": "18:00"},
    {"value": "18:30"},
    {"value": "19:00"}
  ];
  reasons = [
    {"value": "reason1"},
    {"value": "reason2"},
    {"value": "reason3"},
    {"value": "reason4"}
  ];
  cars: any;
  constructor(public fb: FormBuilder, private httpClient: HttpClient, private datePipe: DatePipe, private router: Router, public _service: RequestService, private cdr: ChangeDetectorRef) { 
    this.form = this.fb.group({
      name: [''],
      reason: [''],
      pickupDate: [''],
      pickupTime: [''],
      returnDate: [''],
      returnTime: [''],
      destination: [''],
      car: ['']
    });
    _service.getAllCars().subscribe((data: any[]) => {
      this.cars = data;
    });
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
    formData.append('returnDate', this.transformDate(this.form.get('pickupDate').value));
    formData.append('returnTime', this.form.get('returnTime').value);
    formData.append('destination', this.form.get('destination').value);
    formData.append('car', this.form.get('car').value);
    this.httpClient.post('http://localhost:5000/api/request/addrequest', formData).subscribe(() => {
      console.log("am adaugat.");
      this.router.navigate(['/dashboard']);
    });
  }
  filterCars(){
    if(this.form.get('pickupTime').value != '' && this.form.get('returnTime').value != '' && this.form.get('pickupDate').value != ''){
      console.log("filtering.....");
      var formData = new FormData();
      formData.append('pickupTime', this.form.get('pickupTime').value);
      formData.append('returnTime', this.form.get('returnTime').value);
      formData.append('pickupDate', this.transformDate(this.form.get('pickupDate').value));
      this.httpClient.post('http://localhost:5000/api/request/filtercars', formData).subscribe((data) => {
        this.cars = data;
        if (!this.cdr['destroyed']) {
          this.cdr.detectChanges();
      }
      });
    }
    
  }
}
