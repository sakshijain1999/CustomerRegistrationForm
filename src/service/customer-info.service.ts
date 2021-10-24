
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerInfoService {


  constructor(private http: HttpClient) {

  }
  createUser(users: any) {
    return this.http.post("http://localhost:3200/users", users);
  }
  getUser():Observable<any> {
    return this.http.get("http://localhost:3200/users")
  }
  updateUser(users: { id: string; }) {
    return this.http.put("http://localhost:3200/users/" + users.id, users)
  }
  deleteUser(users: { id: string; }) {
    return this.http.delete("http://localhost:3200/users/" + users.id)
  }
  getUserById(id: any) {
    return this.http.get('http://localhost:3200/users/get/'+id);
  }
}
