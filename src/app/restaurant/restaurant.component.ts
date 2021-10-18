import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(private service:SharedService) { }

  RestaurantList:any=[];

  ngOnInit(): void{
  this.refreshRestList();
  }



    refreshRestList(){
      this.service.getRestaurantList().subscribe(data=>{
        this.RestaurantList=data;
  
      });
    }

} 
