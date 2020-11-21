import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface IUser {
  username: string;
  firstName: string;
  lastName: string;
  pronouns: string;
  favoriteBusinesses: [];
  reviewedBusinesses: [];
}

// import { HttpErrorHandler, HandleError } from "../http-error-handler.service";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "my-auth-token"
  })
};

@Injectable()
export class UserService {
  usersUrl = "database/user"; // URL to web api

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get<IUser>(this.usersUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      )
  }

  getUserResponse(): Observable<HttpResponse<IUser>> {
    return this.http.get<IUser>(
      this.usersUrl, { observe: 'response' });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  // ngOnInit() {
  //   this.getUsers();
  //   this.getUserResponse();
  // }

  // private handleError: HandleError;


}
