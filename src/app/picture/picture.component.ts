import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  @Input() uid: string;
  @Input() type: string;

  src = 'https://playshoptitans.com/images/assets/';

  constructor() {}

  ngOnInit() {}
}
