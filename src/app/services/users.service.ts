import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  /**
   * Fetches a paginated list of users from the API.
   * @param page The page number to fetch (1-based).
   * @returns Observable<User[]>
   */
  getUsers(page: number): Observable<User[]> {
    const url = `${this.apiUrl}?page=${page}`;
    return this.http.get<any>(url).pipe(
      map(response => response.data as User[]),
      catchError(error => {
        console.error('Error fetching users:', error);
        return of([]); // Return empty array if error occurs
      }),
      shareReplay() // Cache the response to avoid redundant API calls
    );
  }

  /**
   * Fetches details for a single user by ID from the API.
   * @param userId The ID of the user to fetch.
   * @returns Observable<User>
   */
  getUserById(userId: number): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<any>(url).pipe(
      map(response => response.data as User),
      catchError(error => {
        console.error(`Error fetching user with ID ${userId}:`, error);
        throw error; // Propagate the error
      })
    );
  }
}
