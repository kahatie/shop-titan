import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: any;

  titleImage = {
    xa: 'icon_accessory_amulet',
    ws: 'icon_weapon_sword'
  };

  icon: string;

  constructor() {}

  ngOnInit() {
    console.log(this.item);

    this.icon =
      'background: rgba(0, 0, 0, 0) url(https://playshoptitans.com/images/assets/ui/itemtypes/' +
      this.titleImage[this.item.type] +
      '.png) no-repeat scroll center center / contain;';
  }
}
