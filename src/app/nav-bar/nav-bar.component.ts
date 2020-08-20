import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  go() {
    window.open('https://discord.com/invite/TPXRk5h');
  }

  items = ['Home', 'Announcements', "Show Off's", 'Contact', 'About'];

  ngOnInit(): void {}
}
