import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() searchUser = new EventEmitter<any>();

  // constructor(private router: Router) {}
  constructor() {}

  ngOnInit(): void {}

  onSearchInputChange(event: any): void {
    const userId = parseInt(event.target.value.trim(), 10);
    this.searchUser.emit(userId);
  }
}
