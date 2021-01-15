import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./_models/user";
import {AccountService} from "./_services/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users : any;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userItem = localStorage.getItem('user');
    const user: User = userItem !== null ? JSON.parse(userItem) : null;
    this.accountService.setCurrentUser(user);
  }

}
