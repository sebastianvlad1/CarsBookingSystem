import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getall(){
    return this.http.get("http://localhost:5000/api/request/getall");
  }
  getallusers(){
    return this.http.get("http://localhost:5000/api/request/getallusers");
  }
  filterRequests(filter){
    return this.http.get("http://localhost:5000/api/request/getall/" + filter);
  }
  countRequests(){
    return this.http.get("http://localhost:5000/api/request/getnumbers");
  }
  register(model: any){
    return this.http.post("http://localhost:5000/api/auth/register", model);
  }
  login(model: any){
    return this.http.post("http://localhost:5000/api/auth/login", model);
  }
  editRequest(model: any){
    return this.http.post("http://localhost:5000/api/request/editrequest", model);
  }
  addEditor(model: any){
    return this.http.post("http://localhost:5000/api/auth/addeditor", model);
  }
}
