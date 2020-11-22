import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name
  phone
  email
  message
  mouseoverContact

  constructor() { }

  ngOnInit(): void {
  }
  contactUs(value){
    console.log(value.name, value.phone,value.email,value.message);
  }

}
