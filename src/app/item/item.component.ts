import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: any;

  titleImage = {
    xa: 'icon_accessory_amulet.png',
    ws: 'icon_weapon_sword.png'
  };

  icon: string;

  constructor() {}

  ngOnInit() {
    console.log(this.item);
  }
}
