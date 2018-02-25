import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'page-contact',
  templateUrl: './page-contact.component.html'
})

export class PageContactComponent {

  title = 'Simple Example Contact-us page using Angular 4';
  public data: any = []


  static email = require("../../../node_modules/emailjs/email");
  static server = PageContactComponent.email.server.connect({
    user: "gogitarakesh",
    password: "Sarojini13293",
    host: "smtp.gogitarakesh@gmail.com",
    ssl: true
  });

  constructor(private http: HttpClient) {
  }




 }
