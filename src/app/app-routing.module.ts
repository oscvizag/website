import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementsComponent } from './body/announcements/announcements.component';
import { AdminComponent } from './body/admin/admin.component';
import { HomeComponent } from './body/home/home.component';

const routes: Routes = [
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'admin7153', component: AdminComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
