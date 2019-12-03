import { Injectable, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import { User } from '../interfaces/user';
import { BehaviorSubject } from 'rxjs';
import firebase from '@firebase/app';
import '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public user: User;

  constructor(private platform: Platform, private zone: NgZone){}

  init(): void{
    const config = {
      apiKey: "AIzaSyB0fjjEcfldSF_p1f_ejt-Lg_hjX4CNPYA",
      authDomain: "home-fb03f.firebaseapp.com",
      databaseURL: "https://home-fb03f.firebaseio.com",
      projectId: "home-fb03f",
      storageBucket: "home-fb03f.appspot.com",
      messagingSenderId: "44495785514",
      appId: "1:44495785514:web:f8d8bdce26bd1faf6b7d53",
      measurementId: "G-K1PZZNZHY8"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(firebaseUser =>{
      this.zone.run(() => {
        if (firebaseUser){
          this.user = {
            uid: firebaseUser.uid,
            displayName: firebaseUser.displayName,
            displayPicture: firebaseUser.photoURL
          };

          this.loggedIn.next(true);
        } else {
          this.user = null;
          this.loggedIn.next(false);
        }
      });
    });
  }
  login(): void {}
  async logout(): Promise<void>{
    if (this.platform.is('capacitor')){
      try {
        await firebase.auth().signOut();
      } catch (err){
        console.log(err);
      }
    } else {
      try {
        await firebase.auth().signOut();
      } catch (err){
        console.log(err);
      }
    }
  }
  isUserEqual(firebaseUser): boolean {
    return true;
  }
}