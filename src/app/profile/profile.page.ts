import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  async logout(){
    try {
      this.router.navigate(['/login'])
    } catch(err) {
      console.log(err)
    }
  }
}