import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-res',
  templateUrl: './show-res.component.html',
  styleUrls: ['./show-res.component.css']
})
export class ShowResComponent implements OnInit {
  constructor(private service:SharedService) { }

  RestaurantList:any=[];

  Title!: string;
  ActivateAddEditRestComp:boolean=false;
  ActivateReviewComp:boolean=false;
  rest:any;
  
  ngOnInit(): void{
  this.refreshRestList();
  }

  addClick(){
      this.rest={
        RestaurantId:0,
        RestaurantName:"",
        StreetAddress:"",
        City:"",
        State:"",
        Zip:"",
        Description:"",
        HoursOfOperation:""
      }

      this.Title="Add Restraunt";
      this.ActivateAddEditRestComp=true;
    }

    deleteClick(item: any){
      if(confirm('Remove this Restauraunt from all Reviews?')){
        this.service.deleteRestaurant(item.RestaurantId).subscribe(data=>{
          alert(data.toString());
          this.refreshRestList();
        })
      }
    }

    editClick(item: any){
      this.rest=item;
      this.Title="Edit Restraunt";
      this.ActivateAddEditRestComp=true;
    }


    reviewClick(item: any){
      this.rest=item;
      this.Title="Add Review for "+ item.RestaurantName;
      this.ActivateReviewComp=true;
    }
    
  
    closeClick(){
      this.ActivateAddEditRestComp=false;
      this.ActivateReviewComp=false;
      this.refreshRestList();
  
    }
  
    refreshRestList(){
      this.service.getRestaurantList().subscribe(data=>{
        this.RestaurantList=data;
  
      });
    }
  }
