import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
})
export class AnnouncementsComponent implements OnInit {
  constructor(private fire: AngularFirestore) {
    this.fire
      .collection('announcements')
      .valueChanges()
      .subscribe((docs) => {
        this.announcements = docs;
      });
  }

  images = {
    hackerearth:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/HackerEarth_logo.png',
  };

  announcements = [];

  getLink(host: String) {
    let key = host.split(' ').join('').toLowerCase();
    return this.images[key];
  }

  ngOnInit(): void {}
}
