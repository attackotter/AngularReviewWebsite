import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-rest',
  templateUrl: './add-edit-rest.component.html',
  styleUrls: ['./add-edit-rest.component.css']
})
export class AddEditRestComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() rest:any;
  RestaurantId!:string;
  RestaurantName!:string;
  StreetAddress!:string;
  City!:string;
  State!:string;
  Zip!:string;
  Description!:string;
  HoursOfOperation!:string;
  Rating!:string;


  ngOnInit(): void {
    this.RestaurantId=this.rest.RestaurantId;
    this.RestaurantName=this.rest.RestaurantName;
    this.StreetAddress=this.rest.StreetAddress;
    this.City=this.rest.City;
    this.State=this.rest.State;
    this.Zip=this.rest.Zip;
    this.Description=this.rest.Description;
    this.HoursOfOperation=this.rest.HoursOfOperation;
    this.Rating=this.rest.Rating;
  }

  addRestaurant(){
    if(this.Rating == "" || this.RestaurantName == ""){
      alert("A Rating and Restaurant Name are required.");

    }
    else
    {
      var val= {RestaurantId:this.RestaurantId,
      RestaurantName:this.RestaurantName,
      StreetAddress:this.StreetAddress,
      City:this.City,
      State:this.State,
      Zip:this.Zip,
      Description:this.Description,
      HoursOfOperation:this.HoursOfOperation,
      Rating:this.Rating
      }
      this.service.addRestaurant(val).subscribe(rest=>{
        alert(rest.toString());
      });
    }
  }

  updateRestaurant(){
    if(this.Rating == "" || this.RestaurantName == ""){
      alert("A Rating and Restaurant Name are required.");

    }
    else
    {
      var val= {RestaurantId:this.RestaurantId,
        RestaurantName:this.RestaurantName,
        StreetAddress:this.StreetAddress,
        City:this.City,
        State:this.State,
        Zip:this.Zip,
        Description:this.Description,
        HoursOfOperation:this.HoursOfOperation
        }
        this.service.updateRestaurant(val).subscribe(rest=>{
          alert(rest.toString());
        });
    }
  }

}
