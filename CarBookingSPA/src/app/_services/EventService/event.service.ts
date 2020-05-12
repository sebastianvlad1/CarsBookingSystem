import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  data: EventEmitter<string> = new EventEmitter();

  constructor() {
   }

  emitData(order){
    this.data.emit(order);
  }


}
