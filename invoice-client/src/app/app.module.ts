import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { ItemListComponent } from './item-list/item-list.component';
import { BillComponent } from './bill/bill.component';
import { CompanyComponent } from './company/company.component';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { EndDescriptionComponent } from './end-description/end-description.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveComponent } from './reactive/reactive.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserEntryComponent,
    ItemListComponent,
    BillComponent,
    CompanyComponent,
    LoyaltyComponent,
    EndDescriptionComponent,
    HomeComponent,
    SideBarComponent,
    HeaderComponent,
    ReactiveComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
