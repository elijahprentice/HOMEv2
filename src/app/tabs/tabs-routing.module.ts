import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  { path: '',
    component: TabsPage,
    children: [
    { path: 'home', loadChildren: ('../home/home.module#HomePageModule')},
    { path: 'upload', loadChildren: ('../upload/upload.module#UploadPageModule')},
    { path: 'messaging', loadChildren: ('../messaging/messaging.module#MessagingPageModule')},
    { path: 'profile', loadChildren: ('../profile/profile.module#ProfilePageModule')},
    { path: 'help', loadChildren: ('../help/help.module#HelpPageModule')},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}