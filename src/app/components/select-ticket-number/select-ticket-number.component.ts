import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-ticket-number',
  templateUrl: './select-ticket-number.component.html',
  styleUrls: ['./select-ticket-number.component.css']
})
export class SelectTicketNumberComponent implements OnInit {

  public href: string = "";
  noSeats: number = 1;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  proceed(){
    var email = localStorage.getItem("signed_in_email");

    this.href = this.router.url;
    var hallName = this.href.split("hall/")[1]; 

    if(email)
      this.router.navigate(['select-seats', hallName, this.noSeats]);
    else
    {
      if(confirm("Sign In is necessary to proceed"))
        this.router.navigate(['signin']);
    }
    
  }

}
