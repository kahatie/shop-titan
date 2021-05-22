import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  @Input() uid: string;
  @Input() type: string;
  @Input() excl: string;

  folder = {
    resource: 'ui/resources/',
    component: 'items/',
    item: 'items/',
    itemBg: 'ui/itembackgrounds/'
  };

  webp: string;
  png: string;

  constructor(@Inject('ASSETURL') private assetUrl: string) {}

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
      this.assetUrl + this.folder[this.type] + 'webp/' + this.uid + '.webp';
    this.png =
      this.assetUrl + this.folder[this.type] + 'png/' + this.uid + '.png';
  }
}
