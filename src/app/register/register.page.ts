import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router) { }

  ngOnInit() {
  }

  async signUp(){
    const { username, password } = this

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@validemail.com', password)
      this.alerter("Success", "Welcome")
      this.router.navigate(['/tabs'])
    } catch (err){
        console.dir(err)
        this.alerter("Error",err.message)
    }
  }
  async alerter(header: string, message: string){
    const alert = this.alert.create({
      header,
      message,
      buttons: ['OK']
    })
    await (await alert).present()
  }
}