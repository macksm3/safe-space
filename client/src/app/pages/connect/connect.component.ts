import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  public userName: string;
  public users: number = 0;
  public message: string = '';
  public messages: string[] = [];

  constructor(private chatService: ChatService, public auth: AuthService) { }

  ngOnInit(){
    this.auth.userProfile$.subscribe( (data) => {
      this.userName = data.nickname;
    })

    this.chatService.receiveChat().subscribe((message: string) => {
      this.messages.push(message);
    });

    this.chatService.getUsers().subscribe((users: number) => {
      this.users = users;
    });
  }

  addChat(){
    this.messages.push(this.message);
    this.chatService.sendChat(this.message);
    this.message = '';
  }

}
