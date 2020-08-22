import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Authors {
  name: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  name: String = '';
  url: String = '';
  bannerurl: String = '';
  des: String = '';
  host: String = '';
  startdate;
  enddate;

  constructor(
    private http: HttpClient,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {}

  formControl = new FormGroup({
    name: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required]),
    bannerurl: new FormControl('', [Validators.required]),
    host: new FormControl('', [Validators.required]),
    des: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    startdate: new FormControl('', [Validators.required]),
    enddate: new FormControl('', [Validators.required]),
  });

  go() {
    if (this.authors.length == 0) {
      alert('Add Authors');
      return;
    }
    let data = {
      name: this.name,
      url: this.url,
      description: this.des,
      host: this.host,
      bannerurl: this.bannerurl,
      authors: this.authors,
      startdate: this.startdate,
      enddate: this.enddate,
    };

    this.http
      .post('https://osc-bot.herokuapp.com/new', data)
      .subscribe((res) => {
        console.log(res);
      });
    this._snackBar.open('Done', 'OK', {
      duration: 2000,
    });
    this.route.navigate(['']);
  }

  ngOnInit(): void {
    document
      .getElementById('go-pokemon')
      .scrollIntoView({ behavior: 'smooth' });
  }

  ///space

  visible = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  authors: Authors[] = [];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add
    if ((value || '').trim()) {
      this.authors.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Authors): void {
    const index = this.authors.indexOf(fruit);

    if (index >= 0) {
      this.authors.splice(index, 1);
    }
  }
}
