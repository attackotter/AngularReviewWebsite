import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantreviewComponent } from './restaurantreview/restaurantreview.component';

const routes: Routes = [
{path:'restaurant', component:RestaurantComponent},
{path:'restaurantreview', component:RestaurantreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
