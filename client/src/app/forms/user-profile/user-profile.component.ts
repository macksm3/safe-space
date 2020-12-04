import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { UserFormComponent } from '../userform/userform.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
})

export class UserProfileComponent implements OnInit {
    public authData;
    public databaseData;
    public user;
    constructor(public auth: AuthService, private http: HttpClient) { }

    async ngOnInit(): Promise<void> {
        await this.getAuthData();
        await this.getDatabaseData(this.authData.sub)
        this.compileUserData();
    }

    async getDatabaseData(authSub) {
        const apiURL = await `/api/user/sub/${authSub}`;

        this.databaseData = await this.http.get(apiURL);
        console.log(this.databaseData);
    }

    async getAuthData() {
        this.auth.userProfile$.subscribe(data => {
            console.log(data);
            this.authData = data;
        })
    }

    compileUserData() {
        var result = Object.entries(this.authData);
        var result2 = Object.entries(this.databaseData)
        console.log(`\nauthData === \n${result}\n\n databaseData === \n${result2}\n`);
        
    }

}