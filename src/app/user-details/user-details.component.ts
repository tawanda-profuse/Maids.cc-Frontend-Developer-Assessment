import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/users.service';
import { User } from '../models/user';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User | null = null;

  constructor(private route: ActivatedRoute, private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = +params['id']; // Convert route parameter 'id' to number
      this.loadUserDetails(userId);
    });
  }

  loadUserDetails(userId: number): void {
    this.httpService.getUserById(userId).subscribe(
      (user: User) => {
        this.user = user;
      },
      (error) => {
        console.error(`Error loading user details for ID ${userId}:`, error);
      }
    );
  }

  goBack(): void{
    this.router.navigateByUrl("/users");
  }
}
