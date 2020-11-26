import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { catchError, retry } from "rxjs/operators";
import { IBusiness } from "./business-interface";
import { HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "my-auth-token"
    })
};

@Injectable()
export class FormService {

    constructor(private http: HttpClient) { }

    businessesUrl: "api/business";

    /** POST: add a new resource to the database */
    addBusiness(resource) {
        return this.http
            .post(this.businessesUrl, resource)
            .pipe(catchError(this.handleError));

    }

    // /** POST: add a new resource to the database */
    // addBusiness(resource: Business): Observable<Business> {
    //   return this.http
    //     .post<Business>(this.businessesUrl, resource, httpOptions)
    //     .pipe(catchError(this.handleError("addBusiness", resource)));
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