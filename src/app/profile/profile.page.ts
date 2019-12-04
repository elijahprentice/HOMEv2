import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
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
