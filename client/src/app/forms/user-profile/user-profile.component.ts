import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { UserFormComponent } from '../userform/userform.component';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
})

export class UserProfileComponent implements OnInit {
    public user;
    constructor(public auth: AuthService) { }

    ngOnInit(): void {
        this.auth.userProfile$.subscribe(data => {
            console.log(data);
            this.user = data;
        })
    }

}