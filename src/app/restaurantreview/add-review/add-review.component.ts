import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() rest:any;
  RestaurantId!:string;
  Rating!:string;


  ngOnInit(): void {
    this.RestaurantId=this.rest.RestaurantId;
    this.Rating=this.rest.Rating;
  }

  addReview(){
    if(this.Rating == ""){
      alert("A Rating is Required");

    }
    else{
      var val= {RestaurantId:this.RestaurantId,
      Rating:this.Rating
      }
      this.service.addReview(val).subscribe(rest=>{
        alert(rest.toString());
      });
    }
  }

}
