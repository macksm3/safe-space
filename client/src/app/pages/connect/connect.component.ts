import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})

export class ConnectComponent implements OnInit {

  public users: number = 0;
  public userName: string;
  public message: string;
  public dataArr: object[] = [];

  constructor(private chatService: ChatService, public auth: AuthService) { }

  ngOnInit(){

    // currently using username from Auth0
    this.auth.userProfile$.subscribe((data) => {
      console.log(data)
      this.userName = data.nickname;
    })

    // receives an object with nickname and message
    this.chatService.receiveChat().subscribe((data: object) => {
      // pushes into data array
      this.dataArr.push(data);
    });

    // gets number of users online
    this.chatService.getUsers().subscribe((users: number) => {
      this.users = users;
    });
  }

  addChat(){
    // pushes new message object that will be sent into dataArr
    this.dataArr.push({
      // setting username
      [0]: this.userName,
      // setting message 
      [1]: this.message
    });

    // sending message object with username and message
    this.chatService.sendChat(this.userName, this.message);
    this.message = '';
  }

}
