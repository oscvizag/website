import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  name: String = '';
  url: String = '';
  des: String = '';
  host: String = '';

  constructor(private http: HttpClient, private route: Router) {}

  checks() {
    if (this.name.length == 0) return false;
    if (this.des.length == 0) return false;
    if (this.url.length == 0) return false;
    if (this.host.length == 0) return false;
    return true;
  }

  go() {
    if (this.checks() == false) {
      alert('Empty Fields');
      return false;
    }

    let data = {
      name: this.name,
      url: this.url,
      description: this.des,
      host: this.host,
    };

    this.http
      .post('https://osc-bot.herokuapp.com/new', data)
      .subscribe((res) => {
        console.log(res);
      });
    alert('Done');
    this.route.navigate(['']);
  }

  ngOnInit(): void {}
}
