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
  folder = {
    resource: 'ui/resources/',
    item: 'items/',
    itemBg: 'ui/itembackgrounds/'
  };

  webp: string;
  png: string;

  constructor() {}

  ngOnInit() {
    this.webp =
      this.src + this.folder[this.type] + 'webp/' + this.uid + '.webp';
    this.png = this.src + this.folder[this.type] + 'png/' + this.uid + '.png';
  }
}
