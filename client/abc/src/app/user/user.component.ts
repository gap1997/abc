import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { response } from 'express';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userData = {
    Fristname: '',
    LastName: '',
    DateofBirth: '',
    city: '',
    active: '',
  };
  constructor(private userService: UserService) {}
  ngOnInit() {}
  submitForm() {
    this.userService.submitUserData(this.userData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
