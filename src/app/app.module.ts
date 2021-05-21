import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { PictureComponent } from './picture/picture.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ItemComponent, ItemListComponent, PictureComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
