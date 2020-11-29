import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface IUserDB {
    username: string;
    subId: string;
}

@Injectable()
export class AuthToDbService {

    constructor(
        private http: HttpClient,
    ) { }

    public addUser(user: IUserDB): Observable<IUserDB> {
        return this.http.post<IUserDB>("api/user", user);
    }
}