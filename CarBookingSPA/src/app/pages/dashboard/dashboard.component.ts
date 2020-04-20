import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

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
  public tableData1: TableData;

    ngOnInit(){
      this.tableData1 = {
        headerRow: [ 'ID', 'Name', 'Reason of request', 'Pick-up date','Pick-up time','Return Date','Return time' ,'Booking status'],
        dataRows: [
            ['1', 'Dan', 'Business trip', '20/07/2020','8:00','21/07/2020','12:00', 'Accepted'],
            ['2', 'Maria', 'Business trip', '20/07/2020','8:00','21/07/2020','12:00' ,'Rejected'],
            ['3', 'Stefan' , 'Business trip', '20/07/2020','8:00','21/07/2020','12:00' ,'Accepted'],
            ['4', 'Andrei', 'Vacanta', '20/07/2020','8:00','21/07/2020' ,'12:00','Accepted'],
            ['5', 'George', 'Business trip', '20/07/2020','8:00','21/07/2020' ,'12:00','Accepted'],
            ['6', 'Laurentiu', 'Business trip', '20/07/2020','8:00','21/07/2020' ,'12:00','Accepted']
        ]
    };
      
    }
}
