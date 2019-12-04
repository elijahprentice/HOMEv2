import { Injectable } from '@angular/core';
import firebase from '@firebase/app';

interface user {
  username: string,
  uid: string
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private user: user;

  constructor() { }

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
  }

  setUser(user: user){
    this.user = user
  }
  getUID(){
    return this.user.uid
  }
  getName(){
    return this.user.username
  }
}