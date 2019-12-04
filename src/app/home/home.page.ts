import { Component, OnInit, ViewChild} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PhotoService } from '../services/photo.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonList, { static: false }) slidingList: IonList;

  constructor(
    public photoService: PhotoService,
    public sanitizer: DomSanitizer) {}
  ngOnInit(){
    this.photoService.load();
  }

}