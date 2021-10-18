import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://antonegoreviews.azurewebsites.net/";

  constructor(private http:HttpClient) { }

  getRestaurantList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/api/Restaurant')
  }

  addRestaurant(val:any){
    return this.http.post(this.APIUrl+'/api/restaurant/addrestaurant',val)
  }

  updateRestaurant(val:any){
    return this.http.put(this.APIUrl+'/api/restaurant',val)
  }

  deleteRestaurant(val:any){
    return this.http.delete(this.APIUrl+'/api/restaurant/'+ val)
  }

  addReview(val:any){
    return this.http.post(this.APIUrl+'/api/restaurant/addreview',val)
  }

}
