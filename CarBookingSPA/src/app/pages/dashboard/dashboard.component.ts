import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { RequestService } from 'app/_services/RequestService/request.service';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit{
  public requests: any = [];

  constructor(public _service: RequestService) { 

    _service.getall().subscribe((data: any[]) => {
      this.requests = data;
      console.log(this.requests);

    });
  }
    ngOnInit(){

      
    }
}
