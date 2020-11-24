import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "my-auth-token"
  })
};

export interface IResource {
  type: string;
  name: string;
  city: string;
  state: string;
  website: string;
  description: string;
  contactName: string;
  email: string;
  phone: string;
  memberOwned: boolean;
}

@Injectable()
export class TableService {
  resourcesUrl = "api/resources"; // URL to web api

  constructor(private http: HttpClient) { }

  /** GET resourcees from the server */
  public getResources() {
    return this.http.get<IResource[]>(this.resourcesUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error);
      )
  };

  // /* GET resourcees whose name contains search term */
  // searchResourcees(term: string): Observable<IResource[]> {
  //   term = term.trim();

  //   // Add safe, URL encoded search parameter if there is a search term
  //   const options = term ? { params: new HttpParams().set("name", term) } : {};

  //   return this.http
  //     .get<IResource[]>(this.resourcesUrl, options)
  //     .pipe(catchError(this.handleError)));
  // }

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
}

  // //////// Save methods //////////

  // /** POST: add a new resource to the database */
  // addResource(resource: Resource): Observable<Resource> {
  //   return this.http
  //     .post<Resource>(this.resourcesUrl, resource, httpOptions)
  //     .pipe(catchError(this.handleError("addResource", resource)));
  // }

  // /** DELETE: delete the resource from the server */
  // deleteResource(id: number): Observable<{}> {
  //   const url = `${this.resourcesUrl}/${id}`; // DELETE api/resourcees/42
  //   return this.http
  //     .delete(url, httpOptions)
  //     .pipe(catchError(this.handleError("deleteResource")));
  // }

  // /** PUT: update the resource on the server. Returns the updated resource upon success. */
  // updateResource(resource: Resource): Observable<Resource> {
  //   httpOptions.headers = httpOptions.headers.set(
  //     "Authorization",
  //     "my-new-auth-token"
  //   );

  //   return this.http
  //     .put<Resource>(this.resourcesUrl, resource, httpOptions)
  //     .pipe(catchError(this.handleError("updateResource", resource)));
  // }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
