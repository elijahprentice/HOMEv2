import { Injectable, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';
import '@firebase/firestore';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(
    private storage: Storage,
    private userService: UserService
  ){ }
  
  init(){}
  getData(): Promise<any> {
    return this.storage.get("photos");
  }
  save(data): void {
    this.storage.set("photos",data);
  }
}