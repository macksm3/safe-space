import { Component, OnInit } from '@angular/core';
import { IUser, UserService } from './user.service';

@Component({
    selector: 'app-service',
    templateUrl: './user.component.html',
    providers: [UserService],
    styles: ['.error {color: red;}']
})

export class UserComponent {
    error: any;
    users: string[];
    user: IUser;

    constructor(private userService: UserService) { }

    showUsers() {
        this.userService.getUsers()
            .subscribe(
                (data: IUser) => this.user = { ...data }, // sucess path
                error => this.error = error // error path
            );
    }

    showUserResponse() {
        this.userService.getUserResponse()
            // resp is of type `HttpResponse<Config>`
            .subscribe((resp) => {
                // displays headers
                console.log(resp)
            })
    }

    ngOnInit() {
        this.showUserResponse();
    }
}