import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
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
    nr: number = 1;
    countRequests: any;
    @ViewChild('cards') cards: ElementRef;

    constructor(public _service: RequestService, public _eventService: EventService, private cdr: ChangeDetectorRef) { 
        _service.getall().subscribe((data: any[]) => {
            this.requests = data;
        });

        _service.countRequests().subscribe((counts) => {
            this.countRequests = counts;
        });

    this.filterSubscription =  _eventService.data.subscribe((data) => {
        _service.filterRequests(data).subscribe((req) => {
            this.requests = req;
            this.cdr.detectChanges();
        });
    });
}

getallrequests(){
    this._service.getall().subscribe((data: any[]) => {
        this.requests = data;
    });
}
getCustomCss(){
    if(this.nr == 1){
        return '';
    }else if(this.nr == 2){
        return 'accepted';
    }else if(this.nr == 3)
    {
        return 'waiting'
    }else if(this.nr == 4){
        return 'cancelled';
    }
}

ngOnInit(){
}

ngAfterViewInit(){
    
}
ngOnDistroy(){
    this.filterSubscription.unsubscribe();
}


}
