import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LandingComponent} from './components/landing/landing.component';
import {SelectTicketNumberComponent} from './components/select-ticket-number/select-ticket-number.component'
import {SelectSeatsComponent} from './components/select-seats/select-seats.component'
import {SigninComponent} from './components/signin/signin.component'
import {SignupComponent} from './components/signup/signup.component'
import {MyticketsComponent} from './components/mytickets/mytickets.component';

const routes: Routes = [
  {path:'', component:LandingComponent},
  {path: 'hall/:hallname', component:SelectTicketNumberComponent, pathMatch: 'full'},
  {path: 'select-seats/:hallname/:number', component:SelectSeatsComponent, pathMatch: 'full'},
  {path:'select-ticket-number',component:SelectTicketNumberComponent },
  // {path:'select-seats',component:SelectSeatsComponent },
  {path:'signin',component:SigninComponent },
  {path:'signup',component:SignupComponent },
  {path:'mytickets',component:MyticketsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
