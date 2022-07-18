import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToastModule} from 'primeng/toast';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PanelModule} from 'primeng/panel';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {FilterService} from 'primeng/api';
import {AccordionModule} from 'primeng/accordion';
import {MessageService} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {ToolbarModule} from 'primeng/toolbar';

import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import {RouterModule, Routes } from '@angular/router';
import {DockModule} from 'primeng/dock';
import {TableModule} from 'primeng/table';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { AddEditEmployeeComponent } from './employee/add-edit-employee/add-edit-employee.component';
import { ProjectComponent } from './project/project.component';
import { ShowProjectComponent } from './project/show-project/show-project.component';
import { AddEditProjectComponent } from './project/add-edit-project/add-edit-project.component';
import { HttpClientModule} from '@angular/common/http';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogService} from 'primeng/dynamicdialog';
import {PickListModule} from 'primeng/picklist';
import { PickListComponent } from './pick-list/pick-list.component';


const appRoutes: Routes =[
 
  
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmployeeComponent,
    AddEditEmployeeComponent,
    ProjectComponent,
    ShowProjectComponent,
    AddEditProjectComponent,
    PickListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    FormsModule, 
    ReactiveFormsModule,
    PanelModule,
    MessagesModule,
    MessageModule,
    AccordionModule,
    CommonModule,
    BrowserAnimationsModule,
    CalendarModule,
    InputMaskModule,
    DropdownModule,
    ToolbarModule,
    HttpClientModule,
    ButtonModule,
    TabMenuModule,
    DockModule,
    RouterModule.forRoot(appRoutes),
    TableModule,
    DynamicDialogModule,
    PickListModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    FilterService,
    MessageService,
    SharedService,
    DialogService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
