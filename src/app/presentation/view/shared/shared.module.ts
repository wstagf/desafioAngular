import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { LogoComponent } from './menu/components/logo/logo.component';
import { ChatMenuItemComponent } from './menu/components/chat-menu-item/chat-menu-item.component';
import { BankinkMenuItemComponent } from './menu/components/banking-menu-item/banking-menu-item.component';
import { ConfigMenuItemComponent } from './menu/components/config-item/config-menu-item.component';
import { MenuItemComponent } from './menu/components/menu-item/menu-item.component';
import { SearchMenuItemComponent } from './menu/components/search-item/search-menu-item.component';
import { StarMenuItemComponent } from './menu/components/start-item/star-menu-item.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    LogoComponent,
    BankinkMenuItemComponent,
    ChatMenuItemComponent,
    ConfigMenuItemComponent,
    MenuItemComponent,
    SearchMenuItemComponent,
    StarMenuItemComponent,
    MenuComponent
  ],
  exports: [
    LogoComponent,
    BankinkMenuItemComponent,
    ChatMenuItemComponent,
    ConfigMenuItemComponent,
    MenuItemComponent,
    SearchMenuItemComponent,
    StarMenuItemComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
     
  ]
})
export class SharedModule { }
