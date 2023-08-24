import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiurl='http://localhost:8000/user'
  constructor(private http:HttpClient) { }

  register(user:User):Observable<any>{
    let url=`${this.apiurl}/register`
    return this.http.post<any>(url,user)
  }
  login(user:User):Observable<any>{
    let url=`${this.apiurl}/login`
    return this.http.post<any>(url,user)
  }
  logout():Observable<User>{
    let url=`${this.apiurl}/logout`
    return this.http.get<User>(url)
  }
}
