import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectTicketNumberComponent } from './components/select-ticket-number/select-ticket-number.component';
import { LandingComponent } from './components/landing/landing.component';
import { SelectSeatsComponent } from './components/select-seats/select-seats.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { MyticketsComponent } from './components/mytickets/mytickets.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectTicketNumberComponent,
    LandingComponent,
    SelectSeatsComponent,
    SigninComponent,
    SignupComponent,
    MyticketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
