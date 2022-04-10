import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  sendPostRequest(val: any): Observable<any> 
  {
    return this.http.post<any>("http://localhost:3000/signup/"+val, "");
  }


  onSubmit(form: NgForm)
  {
    //console.log('Your form data : ', JSON.stringify(form.value));
    this.sendPostRequest(JSON.stringify(form.value)).subscribe(data => {
        
      if(data)  
        this.router.navigate(['signin']);
    });

  }

}
