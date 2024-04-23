import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/users.service';
import { User } from '../models/user';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  currentPage = 1;

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers(this.currentPage);
  }

  loadUsers(page: number): void {
    this.httpService.getUsers(page).subscribe(
      users => {
        this.users = users;
        this.filteredUsers = [...this.users]; // Initialize filteredUsers with all users
        this.currentPage = page;
      },
      error => {
        console.error('Error loading users:', error);
      }
    );
  }

  filterUsers(userId: any): void {
    if (!isNaN(userId)) {
      this.filteredUsers = this.users.filter(user => user.id === userId);
    } else {
      this.filteredUsers = [...this.users]; // Reset to all users if input is not a valid number
    }
  }

  viewUserDetails(userId: number): void {
    this.router.navigateByUrl(`/users/${userId}`);
  }
}
