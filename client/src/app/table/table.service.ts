import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { IResource } from "./IResource";
import { HttpErrorHandler, HandleError } from "../http-error-handler.service";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "my-auth-token"
  })
};

@Injectable()
export class TableService {
  resourcesUrl = "api/resources"; // URL to web api
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError("TableService");
  }

  /** GET resourcees from the server */
  getResources(): Observable<IResource[]> {
    return this.http
      .get<IResource[]>(this.resourcesUrl)
      .pipe(catchError(this.handleError("getResources", [])));
  }

  /* GET resourcees whose name contains search term */
  searchResourcees(term: string): Observable<IResource[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ? { params: new HttpParams().set("name", term) } : {};

    return this.http
      .get<IResource[]>(this.resourcesUrl, options)
      .pipe(catchError(this.handleError<IResource[]>("searchResources", [])));
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
