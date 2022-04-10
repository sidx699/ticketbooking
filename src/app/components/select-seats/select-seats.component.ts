import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 

@Component({
  selector: 'app-select-seats',
  templateUrl: './select-seats.component.html',
  styleUrls: ['./select-seats.component.css']
})
export class SelectSeatsComponent implements OnInit {

    
    public href: string = "";
    maxSeats: number = 0;
    initSeat: number = 0;
    elementSelected: string[] = []; 
    cinremahallname: string = "";

    


    dict: {[name: string]: boolean} = {};
    modifieddict: {[name: string]: boolean} = {};
    
    
    
    constructor(private router: Router, private http: HttpClient) {

        this.href = this.router.url;
        this.cinremahallname = this.href.split("/")[2];
        this.cinemahallseatsGet(this.cinremahallname).subscribe(data=>{
            this.dict = data.seats;
            this.modifieddict = data.seats; 
        });
    }

  ngOnInit(): void {
    this.href = this.router.url;
    this.maxSeats = Number(this.href.split("/")[3]);
  }

  cinemahallseatsGet(cinremahallname: any): Observable<any>
  {
    return this.http.post<any>("http://localhost:3000/cinemahallseat/"+cinremahallname,"");
  }

  

  sendPostRequest(data: any): Observable<any> 
  {
    return this.http.post<any>("http://localhost:3000/ticketbookedanddictmodify/"+JSON.stringify(data)+"/"+this.cinremahallname+"/"+JSON.stringify(this.modifieddict),"");
  }

  countSeat()
  {
    if(this.initSeat == this.maxSeats-1){
        this.elementSelectedFunction();
        if(confirm(this.maxSeats+" tickets has been selected already!\nProceed to Pay Rs "+ this.maxSeats*200)) {
           
            //let data = JSON.stringify(this.elementSelected);

            const d = new Date();
            var dateToday = d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear();

            var email = localStorage.getItem("signed_in_email");
            let data = {
                "boughtticketid": 1,
                "email": email,
                "ticketnumbersbought": this.elementSelected,
                "cinemahallname": this.cinremahallname,
                "showname": "Movie Name",
                "Date of Show": dateToday,
                "Total Price": this.elementSelected.length*200
            };
           
            this.sendPostRequest(data).subscribe();
            this.router.navigate(['mytickets']);

        }
        else{
            //alert("Cancelled");

            this.elementSelected.forEach(function (value) {
                
                var currentSeat = <HTMLInputElement> document.getElementById(value);
                if(currentSeat.checked)
                {
                    currentSeat.checked = false;
                }

              }); 

            this.initSeat = 0;
            this.elementSelected = [];
            // console.log(this.initSeat);
            // console.log(this.elementSelected);
        }
    }
    else{
        this.initSeat += 1;
    }
  }


  elementSelectedFunction()
    {
        for(let i=1; i<=16; i++)
        {
            var currentSeat = <HTMLInputElement> document.getElementById("a"+String(i));
            if(currentSeat.checked)
            {
                this.modifieddict["a"+i] = true;
                this.elementSelected.push("a"+i);
            }
        }
        for(let i=1; i<=16; i++)
        {
            var currentSeat = <HTMLInputElement> document.getElementById("b"+String(i));
            if(currentSeat.checked)
            {
                this.modifieddict["b"+i] = true;
                this.elementSelected.push("b"+i);
            }
        }
        for(let i=1; i<=16; i++)
        {
            var currentSeat = <HTMLInputElement> document.getElementById("c"+String(i));
            if(currentSeat.checked)
            {
                this.modifieddict["c"+i] = true;
                this.elementSelected.push("c"+i);
            }
        }  
    }

}


