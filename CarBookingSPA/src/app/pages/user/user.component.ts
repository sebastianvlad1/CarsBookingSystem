import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RequestService } from 'app/_services/RequestService/request.service';
import { EventService } from 'app/_services/EventService/event.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css']
})

export class UserComponent implements OnInit{
    tabelname: string = "Total Rezervari";
    requests: any = [];
    filterSubscription: Subscription;
constructor(public _service: RequestService, public _eventService: EventService, private cdr: ChangeDetectorRef) { 

    _service.getall().subscribe((data: any[]) => {
    this.requests = data;
    });

    this.filterSubscription =  _eventService.data.subscribe((data) => {
        console.log("eu sunt in profile, am primit " + data); // cautarea in baza de date
        
    });
}

ngOnInit(){
}

ngOnDistroy(){
    this.filterSubscription.unsubscribe();
}

send(order){
    //this._eventService.emitData(order);
    console.log(order);
    //this._service.getall(order);
    if(!this.cdr['destroyed']){
        this.cdr.detectChanges();
    }
}
}
