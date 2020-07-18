import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
  login: string;
  password: string;
  email: string;
  users: Array<any> = [];
  saveStatus: boolean;
  index: number;
  validLogin = true;
  validPassword = true;
  validEmail = true;

  constructor() { }

  ngOnInit(): void {
  }

  addUser(): void {
    this.validLogin = true;
    this.validPassword = true;
    this.validEmail = true;
    if (this.login) {
      if (this.password) {
        if (this.email) {
          this.users.push({
            login: this.login,
            password: this.password,
            email: this.email
          });
          this.login = '';
          this.password = '';
          this.email = '';
        }
        else this.validEmail = false;
      }
      else this.validPassword = false;
    }
    else this.validLogin = false;
  }
  saveUser(): void {
    this.validEmail = true;
    this.validPassword = true;
    this.validEmail = true;
    if (this.login) {
      if (this.password) {
        if (this.email) {
          this.users[this.index].login = this.login;
          this.users[this.index].password = this.password;
          this.users[this.index].email = this.email;
          this.saveStatus = false;
          this.login = '';
          this.password = '';
          this.email = '';
        }
        else this.validEmail = false;
      }
      else this.validPassword = false;
    }
    else this.validLogin = false;

  }
  editUser(i: number): void {
    this.index = i;
    this.login = this.users[i].login;
    this.password = this.users[i].password;
    this.email = this.users[i].email;
    this.saveStatus = true;
  }
  deleteUser(i: number): void {
    this.users.splice(i, 1)
  }
}
