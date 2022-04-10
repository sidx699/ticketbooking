import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mytickets',
  templateUrl: './mytickets.component.html',
  styleUrls: ['./mytickets.component.css']
})
export class MyticketsComponent implements OnInit {


  data: any;
  constructor(private http: HttpClient) { 
    this.boughtTickets().subscribe(data => {
      this.data = data;
    });
  }

  ngOnInit(): void {
  }
  boughtTickets(): Observable<any>
  {
    var email = localStorage.getItem("signed_in_email");
    return this.http.post<any>("http://localhost:3000/boughttickets/"+email,"");
  }

  cancelTicketObservable(id: any): Observable<any>
  {
    return this.http.post<any>("http://localhost:3000/deleteticket/"+id,"");
  }

  cancelTicket(id: any, tickets: any)
  {
    this.cancelTicketObservable(id).subscribe(data =>
      location.reload()
    );
  }

}
