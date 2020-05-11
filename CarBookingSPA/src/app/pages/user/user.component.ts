import { Component, OnInit } from '@angular/core';
import { RequestService } from 'app/_services/RequestService/request.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    tabelname: string = "Total Rezervari";
    requests: any = [];

constructor(public _service: RequestService) { 

    _service.getall().subscribe((data: any[]) => {
    this.requests = data;
    });
}
ngOnInit(){
}

send(order){
    console.log(order);
    //this._service.getall(order);
}
}
