import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const page = +params['page'] || 1; // Get page from query params, default to 1
      this.loadUsers(page);
    });
  }

  loadUsers(page: number): void {
    this.httpService.getUsers(page).subscribe(
      users => {
        this.users = users;
        this.filteredUsers = [...this.users]; // Initialize filteredUsers with all users
        this.currentPage = page;
        this.updateUrlParams(page); // Update URL with page parameter
      },
      error => {
        console.error('Error loading users:', error);
      }
    );

  }

  private updateUrlParams(page: number): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge' // Retain existing query params
    });
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
