import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { AddEditRestComponent } from './restaurant/add-edit-rest/add-edit-rest.component';
import { RestaurantreviewComponent } from './restaurantreview/restaurantreview.component';
import { AddReviewComponent } from './restaurantreview/add-review/add-review.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ShowResComponent } from './restaurant/show-res/show-res.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    AddEditRestComponent,
    RestaurantreviewComponent,
    AddReviewComponent,
    ShowResComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
