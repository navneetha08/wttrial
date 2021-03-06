import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './router-module.module';
import { ProfileComponent } from './profile/profile.component';
import { ShomeComponent } from './shome/shome.component';
import { StudentService } from './student.service';
import { OrganiserService } from './organiser.service';
import { CreateEvent } from './organiser/create_event/create_event.component';
import { AllEvents } from './organiser/list_event/list_event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogOverviewExampleDialog} from './organiser/allocate_funds/allocate_funds.component';
import { DispEvents } from './student/list_event/list_event.component';
import { AddHobby } from './student/add_hobby/add_hobby.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'newevent', component: CreateEvent },
  {path: 'allevents', component: AllEvents},
  {path: 'dispevents', component: DispEvents},
  {path: 'addhobby', component: AddHobby}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ShomeComponent,
    CreateEvent,
    AllEvents,
    DialogOverviewExampleDialog,
    DispEvents,
    AddHobby
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,

  ],
  providers: [StudentService, OrganiserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
