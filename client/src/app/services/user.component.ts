import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IUser, UserService } from './user.service';

@Component({
    selector: 'app-service',
    templateUrl: './user.component.html',
    providers: [UserService],
    styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit{

    usersArr: IUser[];
    sampleName = "maybe this will work";

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.showUsers();
        // this.showUserResponse();
    }

    showUsers() {
        this.userService.getUsers()
            .subscribe(
                // formats the data into an array of objects formatted by our user Interface
                (data: IUser[]) => {
                    // pushing data into user
                    this.usersArr = [ ...data ];

                    // logging usersArr
                    console.log("I'm your showUsers function!");
                    console.log(this.usersArr);
                }
            );
    }

    // showUserResponse() {
    //     this.userService.getUserResponse()
    //         // resp is of type `HttpResponse<Config>`
    //         .subscribe((resp) => {
    //             // displays headers
    //             console.log("I'm your showUserReponse");
    //             console.log(resp);
    //         })
    // }

}