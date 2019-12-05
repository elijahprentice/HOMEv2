import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { IonList } from '@ionic/angular';

interface message {
  text,
  name
}

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.page.html',
  styleUrls: ['./messaging.page.scss'],
})
export class MessagingPage implements OnInit {
  @ViewChild(IonList, { static: false }) slidingList: IonList;

  constructor(
    private userService: UserService,
    private dataService: DataService
  ) {}
  public displayName: string
  public deleteIt: message

  ngOnInit() {}

  addMessage(newMessage): void {
    this.displayName = this.userService.getName();
    this.dataService.addMessage(this.displayName,newMessage);
  }
  doRefresh(event){
    setTimeout(()=>{
      event.target.complete();
    }, 2000);
  }
 }