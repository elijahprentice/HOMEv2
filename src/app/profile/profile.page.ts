import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { IonList } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  @ViewChild(IonList, { static: false }) slidingList: IonList;

  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router
  ) {}
  username = this.userService.getName();

  ngOnInit() {}

  createStatus(update): void {
    this.userService.createStatus(update);
  }
  
  deleteStatus(post): void {
    this.slidingList.closeSlidingItems().then(() => {
      this.userService.deleteStatus(post);
    });
  }

  doRefresh(event){
    setTimeout(()=>{
      event.target.complete();
    }, 2000);
  }

  async logout(){
    try {
      this.afAuth.auth.signOut();
      this.router.navigate(['/login'])
    } catch(err) {
      console.log(err)
    }
  }
}
