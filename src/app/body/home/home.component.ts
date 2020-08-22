import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}
  enter: boolean = false;

  contactForm = new FormGroup({
    emailControl: new FormControl('', [Validators.required, Validators.email]),
    nameControl: new FormControl('', [Validators.required]),
    messageControl: new FormControl('', [Validators.required]),
  });

  email = '';
  name = '';
  message = '';

  skills = [
    {
      name: 'Machine\nLearning',
      link: 'https://media.giphy.com/media/4TtTVTmBoXp8txRU0C/giphy.gif',
      state: false,
    },
    {
      name: 'Competative\nCoding',
      link: 'https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif',
      state: false,
    },
    {
      name: 'Web\nDevelopment',
      link: 'https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif',
      state: false,
    },
    {
      name: 'Application\nDevelopment',
      link: 'https://media.giphy.com/media/3o7btNRTJ700Vzmn5e/giphy.gif',
      state: false,
    },
    {
      name: 'Cyber\nSecurity',
      link: 'https://media.giphy.com/media/FmLecXUlTqZ6o/giphy.gif',
      state: false,
    },
  ];

  ngOnInit(): void {}

  send() {
    let data = {
      email: this.email,
      name: this.name,
      message: this.message,
    };
    this.http
      .post('https://osc-bot.herokuapp.com/message', data)
      .subscribe((res) => {
        console.log(res);
      });
    this._snackBar.open('Done', 'OK', {
      duration: 2000,
    });
    this.email='';
    this.name='';
    this.message='';
    document.getElementById('nav').scrollIntoView({ behavior: 'smooth' });
  }
}
