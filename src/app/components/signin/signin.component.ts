import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  sendPostRequest(val: any): Observable<any> 
  {
    return this.http.post<any>("http://localhost:3000/signin/"+val, "");
  }


  onSubmit(form: NgForm)
  {
    console.log('Your form data : ', form.value.email);
    this.sendPostRequest(JSON.stringify(form.value)).subscribe(data => {

      if(data)
      {
        localStorage.setItem("signed_in_email", form.value.email );
        this.router.navigate(['/']);
      }
    });

  }

}
