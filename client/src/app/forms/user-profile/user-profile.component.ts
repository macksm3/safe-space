import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
})

export class UserProfileComponent implements OnInit {
    public authData;
    public databaseData;
    public user = {
        firstName: '',
        lastName: '',
        username: '',
        pronouns: '',
        location: '',
        favoriteBusinesses: '',
        reviewedBusinesses: '',
        moreInfo: ''
    };
    constructor(public auth: AuthService, private http: HttpClient) { }

    async ngOnInit(): Promise<void> {
        await this.getAuthData();
        await this.getDatabaseData(this.authData.sub)
        this.compileUserData();
    }

    async getDatabaseData(authSub) {
        const apiURL = `/api/user/sub/${authSub}`;

        await this.http.get(apiURL).subscribe(data => {

            console.log('data from initial get === ', data[0]);
        });
    }

    async getAuthData() {
        this.auth.userProfile$.subscribe(data => {
            console.log(data);
            this.authData = data;
        })
    }

    compileUserData() {
        var result = Object.entries(this.authData);
        console.log('auth result', result);

        var result2 = Object.entries(this.databaseData)
        console.log(`\nauthData === \n${result}\n\n databaseData === \n${result2}\n`);

    }

}