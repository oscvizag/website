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
        this.group();
      });
  }

  data = [
    {
      name: 'Live',
      links: [],
    },
    {
      name: 'Upcoming',
      links: [],
    },
    {
      name: 'Passed',
      links: [],
    },
  ];

  group() {
    document.getElementById('tab').scrollIntoView({ behavior: 'smooth' });
    this.announcements.forEach((item) => {
      let start: Date = new Date(item.startdate);
      start = new Date(start.toLocaleDateString());
      let end: Date = new Date(item.enddate);
      end = new Date(end.toLocaleDateString());
      let now: Date = new Date();
      now = new Date(now.toLocaleDateString());

      if (start <= now && now <= end) {
        this.data[0].links.push(item);
      } else if (now < start) {
        this.data[1].links.push(item);
      } else if (now > end) {
        this.data[2].links.push(item);
      }
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

  navigate(link) {
    window.open(link);
  }

  ngOnInit(): void {}
}
