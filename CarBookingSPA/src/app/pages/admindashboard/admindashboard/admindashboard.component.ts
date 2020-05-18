import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RequestService } from 'app/_services/RequestService/request.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  public requests: any = [];
  constructor(public _service: RequestService, private cdr: ChangeDetectorRef) {
    _service.getall().subscribe((data: any[]) => {
      this.requests = data;
    });
   }

  ngOnInit(): void {
    console.log("inut");
  }

  accept(data){
    const index: number = this.requests.indexOf(data);

    var formData = new FormData();
    console.log(data);
    formData.append('Id', data.id);
    formData.append('status', "Accepted");

    this._service.editRequest(formData).subscribe(() => {
      this.requests[index].status = "Accepted";
      if (!this.cdr['destroyed']) {
        this.cdr.detectChanges();
     }
    });
  }
  remove(data){
    const index: number = this.requests.indexOf(data);

    var formData = new FormData();
    console.log(data);
    formData.append('Id', data.id);
    formData.append('status', "Cancelled");

    this._service.editRequest(formData).subscribe(() => {
      this.requests[index].status = "Cancelled";
      if (!this.cdr['destroyed']) {
        this.cdr.detectChanges();
     }
    });
  }
}
