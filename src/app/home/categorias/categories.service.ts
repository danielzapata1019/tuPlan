import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private cons:string = "http://tuplansrv.herokuapp.com/api/categoria";
  constructor( private http:HttpClient) {

  }

  public getCategoerias(): Observable<any>{
    return this.http.get(this.cons);
  }
}
