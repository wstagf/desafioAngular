import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { LogoComponent } from './components/logo/logo.component';
import { ChatMenuItemComponent } from './components/chat-menu-item/chat-menu-item.component';
import { BankinkMenuItemComponent } from './components/banking-menu-item/banking-menu-item.component';
import { ConfigMenuItemComponent } from './components/config-item/config-menu-item.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SearchMenuItemComponent } from './components/search-item/search-menu-item.component';
import { StarMenuItemComponent } from './components/start-item/star-menu-item.component';
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
