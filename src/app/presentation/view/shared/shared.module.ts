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
import { StepComponent } from './components/step/step.component';
import { OnboardPageComponent } from '../pages/onboard/onboard-page.component';
import { StartStepComponent } from '../pages/onboard/components/start-step/start-step.component';
import { DocumentStepComponent } from '../pages/onboard/components/document-step/document-step.component';
import { RegisterDataStepComponent } from '../pages/onboard/components/register-data-step/register-data-step.component';
import { OnboardStepComponent } from '../pages/onboard/components/onboard-step/onboard-step.component';

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
    WhiteButtonComponent,
    OnboardPageComponent,
    StepComponent,
    StartStepComponent,
    DocumentStepComponent,
    RegisterDataStepComponent,
    OnboardStepComponent
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
    WhiteButtonComponent,
    OnboardPageComponent,
    StepComponent,
    StartStepComponent,
    DocumentStepComponent,
    RegisterDataStepComponent,
    OnboardStepComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
     
  ]
})
export class SharedModule { }
