import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { Http,HttpModule } from '@angular/http';
import {ApiserviceService} from '../tabs/apiservice.service'
import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    HttpClientModule,
    ApiserviceService,
    HttpModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
