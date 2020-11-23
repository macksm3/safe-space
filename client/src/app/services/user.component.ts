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
    userArr: IUser[];
    user: IUser;

    constructor(private userService: UserService) { }

    showUsers() {
        this.userService.getUsers()
            .subscribe(
                (data: IUser) => {
                    this.user = { ...data }, // sucess path
                    error => {this.error = error && console.log(error)}; // error path
                    console.log(data);
                }
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
        this.showUsers();
    }
}