import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { HobbyService } from '../services/hobby.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
