import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { PictureComponent } from './picture/picture.component';
import { ResourcesItemComponent } from './item/resources-item/resources-item.component';
import { UiIconPipe } from '../pipe/ui-icon.pipe';
import { ItemService } from './item.service';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as filter from './ngrx/filter.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ filter: filter.reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    })
  ],
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    PictureComponent,
    ResourcesItemComponent,
    UiIconPipe
  ],
  bootstrap: [AppComponent],

  providers: [
    ItemService,
    {
      provide: 'ASSETURL',
      multi: false,
      useValue: 'https://playshoptitans.com/images/assets/'
    }
  ]
})
export class AppModule {}
