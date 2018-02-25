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




  save(name, email, mobile, subject, message): void {
    this.data['name'] = name;
    this.data['email'] = email;
    this.data['mobile'] = mobile;
    this.data['subject'] = subject;
    this.data['message'] = message;
    console.log(this.data);
    // send the message and get a callback with an error or details of the message that was sent
    PageContactComponent.server.send({
      text: "i hope this works",
      from: "gogitarakesh@gmail.com",
      to: "gogitarakesh@gmail.com",
      subject: "testing emailjs"
    }, function (err, message) { console.log(err || message); });
    //add request to send email or into mysql
  }
}
