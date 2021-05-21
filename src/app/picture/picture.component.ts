import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  @Input() uid: string;
  @Input() type: string;
  @Input() excl: string;

  src = 'https://playshoptitans.com/images/assets/';
  folder = {
    resource: 'ui/resources/',
    component: 'items/',
    item: 'items/',
    itemBg: 'ui/itembackgrounds/'
  };

  webp: string;
  png: string;

  constructor() {}

  ngOnInit() {
    if (this.type == 'itemBg') {
      this.uid =
        this.excl == 'pack'
          ? 'item_bg_premium'
          : this.excl == 'chest'
          ? 'item_bg_chest'
          : 'item_bg_default';
    }

    this.webp =
      this.src + this.folder[this.type] + 'webp/' + this.uid + '.webp';
    this.png = this.src + this.folder[this.type] + 'png/' + this.uid + '.png';
  }
}
