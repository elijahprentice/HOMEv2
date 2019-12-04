import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadPageRoutingModule } from './upload-routing.module';

import { UploadPage } from './upload.page';
import { PhotoService } from '../services/photo.service';

@NgModule({
  imports: [
    CommonModule,
    PhotoService,
    FormsModule,
    IonicModule,
    UploadPageRoutingModule
  ],
  declarations: [UploadPage]
})
export class UploadPageModule {}