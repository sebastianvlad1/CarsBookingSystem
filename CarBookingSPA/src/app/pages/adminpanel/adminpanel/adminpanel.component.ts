import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RequestService } from 'app/_services/RequestService/request.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  public requests: any = [];
  constructor(public _service: RequestService, private cdr: ChangeDetectorRef) {
    _service.getallusers().subscribe((data: any[]) => {
      this.requests = data;
    });
   }

  ngOnInit(): void {
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
}
