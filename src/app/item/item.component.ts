import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;

  titleImage = {
    xa: 'icon_accessory_amulet.png',
    ws: 'icon_weapon_sword.png'
  };

  guildCount: number;

  icon: string;

  constructor(public itemService: ItemService) {}

  ngOnInit() {}

  getIconUrl(category: string, subCategory: string): string {
    return this.itemService.getIconUrl(category, subCategory);
  }
}
