import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonContent, IonList, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Message } from '../interfaces/message';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.page.html',
  styleUrls: ['./messaging.page.scss'],
})
export class MessagingPage implements OnInit {
  @ViewChild(IonContent, { static: false }) contentArea: IonContent;
  @ViewChild(IonList, { static: true, read: ElementRef }) chatList: ElementRef;
  public chatMessage: string = "";
  public messages: Message[]=[];
  private mutationObserver: MutationObserver;
  private loggedInSubscription: Subscription;
  private messagesSubscription: Subscription;
  private detachListener: Function;
  constructor(
    public dataService: DataService,
    public authService: AuthService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}
  ngOnDestroy() {}
  sendMessage() {}

}