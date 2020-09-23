import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  transition,
  animate,
  style,
  state,
} from '@angular/animations';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('plate', [
      state(
        'none',
        style({
          left: '0',
        })
      ),
      state(
        'open',
        style({
          height: '-100px',
        })
      ),
      transition('none => open', animate('300ms ease-in')),
      transition('open => none', animate('300ms ease-out')),
    ]),
  ],
})
export class NavBarComponent implements OnInit {
  constructor(private route: Router, private fire: AngularFirestore) {
    this.fire
      .doc('config/host-logo')
      .get()
      .subscribe((doc) => {
        this.links = doc.data();
      });
  }
  plateState = false;
  links;

  go() {
    window.open(this.links.discord);
  }

  items = ['Home', 'Announcements', 'Contact', 'About'];

  navigate(des: String) {
    this.plateState = !this.plateState;
    des = des.toLowerCase();
    switch (des) {
      case 'contact':
        this.switchRoute('home');

        this.scroll(des);
        break;
      case 'about':
        this.switchRoute('home');

        this.scroll(des);
        break;
      default:
        this.switchRoute(des);
        break;
    }
  }

  switchRoute(des: String) {
    des = des.split(' ').join('').split("'").join('');
    this.route.navigate([des]);
  }

  scroll(des) {
    setTimeout(() => {
      document.getElementById(des).scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  }

  ngOnInit(): void {}
}
