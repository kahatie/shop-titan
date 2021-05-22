import { Injectable } from '@angular/core';

@Injectable()
export class ItemService {
  itemIconType = {
    xa: 'icon_accessory_amulet.png',
    ws: 'icon_weapon_sword.png'
  };

  itemType = {
    w: 'weapons',
    a: 'armors',
    x: 'accessories',
    e: 'enchantments',
    s: 'stones',
    u: '',
    h: 'helmet',
    g: 'glove',
  };

  constructor() {}
}
