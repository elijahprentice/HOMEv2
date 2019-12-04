import { Component, OnInit, ViewChild} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PhotoService } from '../services/photo.service';
import { SimpleAlertService } from '../services/simple-alert.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { IonList, AlertController, ModalController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  @ViewChild(IonList, { static: false }) slidingList: IonList;

  constructor(
    public photoService: PhotoService,
    private alertCtrl: AlertController,
    private simpleAlert: SimpleAlertService,
    private modalCtrl: ModalController,
    private socialSharing: SocialSharing,
    private loadingCtrl: LoadingController,
    public sanitizer: DomSanitizer) {}

  ngOnInit(){
    this.photoService.load();
  }

  takePhoto(): void {
    this.loadingCtrl.create({
      message: "Saving Photo..."
    }).then(overlay => {
      overlay.present();

      this.photoService.takePhoto().then(
        photo => {
          overlay.dismiss();

          this.alertCtrl.create({
            header: "Posted!",
            message: "Would you also like to share it?",
            buttons: [
              { text: "No, Thanks" },
              { text: "Share", handler: () => {
                console.log(photo);
                this.socialSharing.share(
                  null, photo, null
                );
              }}
            ]
          }).then(prompt => {
            prompt.present();
          });
        },
        err => {
          overlay.dismiss();
          this.simpleAlert.createAlert("Oops!", err).then(alert =>{
            alert.present();
          });
        }
      );
    });
  }
  deletePhoto(photo): void {
    this.slidingList.closeSlidingItems().then(() => {
      this.photoService.deletePhoto(photo);
    });
  }
}