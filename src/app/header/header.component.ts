import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTerm: any | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.searchTerm !== null) {
      const userId = +this.searchTerm; // Convert searchTerm to number
      if (!isNaN(userId)) {
        this.router.navigateByUrl(`/users/${userId}`);
      }
    }
  }
}
