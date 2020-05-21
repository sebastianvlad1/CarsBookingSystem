import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RequestService } from 'app/_services/RequestService/request.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  public adaugat: boolean = false;
  public requests: any = [];
  public cars: any = [];
  form: FormGroup;
  constructor(public _service: RequestService, private cdr: ChangeDetectorRef, public fb: FormBuilder,private httpClient: HttpClient) {
    _service.getallusers().subscribe((data: any[]) => {
      this.requests = data;
    });
    _service.getAllCars().subscribe((data: any[]) => {
      this.cars = data;
    });
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      nr_inmatriculare: ['']
    });
  }

  makeEditor(data){
    const index: number = this.requests.indexOf(data);

    var formData = new FormData();
    console.log(data);
    formData.append('Id', data.id);
    formData.append('Role', "Editor");

    this._service.addEditor(formData).subscribe(() => {
      this.requests[index].role = "Editor";
      if (!this.cdr['destroyed']) {
        this.cdr.detectChanges();
     }
    });
  }

  makeUser(data){
    const index: number = this.requests.indexOf(data);

    var formData = new FormData();
    console.log(data);
    formData.append('Id', data.id);
    formData.append('Role', "User");

    this._service.addEditor(formData).subscribe(() => {
      this.requests[index].role = "User";
      if (!this.cdr['destroyed']) {
        this.cdr.detectChanges();
     }
    });
  }
  submitForm(){
    var formData = new FormData();
    formData.append('nr_inmatriculare', this.form.get('nr_inmatriculare').value);
    this.adaugat = true;
    setTimeout(()=>{
      this.adaugat = false;
 }, 3000);

  this.httpClient.post('http://localhost:5000/api/request/addcar', formData).subscribe(() => {
        this.adaugat = true;
        this.form.controls['nr_inmatriculare'].setValue('');
        setTimeout(()=>{
          this.adaugat = false;
        }, 3000);
      });
  }
}
