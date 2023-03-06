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
import { PageHeaderComponent } from './pageHeader/page-header.component'; 
import { BreadCumbsComponent } from './pageHeader/components/bread-cumbs/bread-crumbs.component';
import { ActionsAreaComponent } from './pageHeader/components/actions-area/actions-area.component';
import { ButtonCompanyComponent } from './pageHeader/components/button-company/button-company.component';
import { NotificationsAlertComponent } from './pageHeader/components/notifications-alert/notifications-alert.component';
import { PerfilConfigComponent } from './pageHeader/components/perfil-config/perfil-config.component';
import { PageFooterComponent } from './pageFooter/page-footer.component';
import { ButtonComponent } from './components/button/button.component';
import { BlueButtonComponent } from './components/blue-button/blue-button.component';
import { WhiteButtonComponent } from './components/white-button/white-button.component';

@NgModule({
  declarations: [
    LogoComponent,
    BankinkMenuItemComponent,
    ChatMenuItemComponent,
    ConfigMenuItemComponent,
    MenuItemComponent,
    SearchMenuItemComponent,
    StarMenuItemComponent,
    MenuComponent,
    PageHeaderComponent,
    BreadCumbsComponent,
    ActionsAreaComponent,
    ButtonCompanyComponent, 
    NotificationsAlertComponent,
    PerfilConfigComponent,
    PageFooterComponent,
    ButtonComponent,
    BlueButtonComponent,
    WhiteButtonComponent
  ],
  exports: [
    LogoComponent,
    BankinkMenuItemComponent,
    ChatMenuItemComponent,
    ConfigMenuItemComponent,
    MenuItemComponent,
    SearchMenuItemComponent,
    StarMenuItemComponent,
    MenuComponent,
    PageHeaderComponent,
    BreadCumbsComponent,
    ActionsAreaComponent,
    ButtonCompanyComponent,
    NotificationsAlertComponent,
    PerfilConfigComponent,
    PageFooterComponent,
    ButtonComponent,
    BlueButtonComponent,
    WhiteButtonComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
     
  ]
})
export class SharedModule { }
