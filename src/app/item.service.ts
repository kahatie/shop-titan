import { Injectable } from '@angular/core';

@Injectable()
export class ItemService {
  itemIconType = {
    xa: 'icon_accessory_amulet.png',
    ws: 'icon_weapon_sword.png'
  };

  public items = {
    order: ['weapons', 'armors', 'accessories', 'enchantments', 'stones'],
    key: {
      weapons: {
        order: [
          'sword',
          'axe',
          'dagger',
          'mace',
          'spear',
          'bow',
          'wand',
          'staff',
          'gun',
          'crossbow'
        ],
        key: {
          ws: 'sword',
          wa: 'axe',
          wd: 'dagger',
          wm: 'mace',
          wp: 'spear',
          wb: 'bow',
          ww: 'wand',
          wt: 'staff',
          wg: 'gun',
          wc: 'crossbow'
        }
      },
      armors: {
        order: [
          'armorheavy',
          'armormedium',
          'armorlight',
          'helmet',
          'roguehat',
          'hat',
          'gauntlets',
          'bracers',
          'boots',
          'shoes'
        ],
        key: {
          ah: 'armorheavy',
          am: 'armormedium',
          al: 'armorlight',
          hh: 'helmet',
          hm: 'roguehat',
          hl: 'hat',
          gh: 'gauntlets',
          gl: 'bracers',
          bh: 'boots',
          bl: 'shoes'
        }
      },
      accessories: {
        order: ['herb', 'potion', 'scrolls', 'shield', 'ring', 'amulet'],
        key: {
          uh: 'herb',
          up: 'potion',
          us: 'scrolls',
          xs: 'shield',
          xr: 'ring',
          xa: 'amulet'
        }
      },
      enchantments: {
        order: [
          'element_fire',
          'element_water',
          'element_air',
          'element_earth',
          'element_light',
          'element_dark',
          'spirit'
        ],
        key: { z: 'rune' }
      },
      stones: {
        order: ['rune', 'moonstone'],
        key: {
          xu: 'rune',
          xm: 'moonstone'
        }
      }
    }
  };

  constructor() {}
}
