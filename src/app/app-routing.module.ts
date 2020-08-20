import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './body/home/home.component';

const routes: Routes = [
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'admin36978', component: AdminComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
