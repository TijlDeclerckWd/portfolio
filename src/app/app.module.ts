import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { OtherSkillsComponent } from './home/other-skills/other-skills.component';
import { WhoAmIComponent } from './home/who-am-i/who-am-i.component';
import {NgbModal, NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NotifierModule} from 'angular-notifier';
import { ProjectsComponent } from './projects/projects.component';
import {PortfolioService} from './services/portfolio.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OtherSkillsComponent,
    WhoAmIComponent,
    ContactFormComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    NgbModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right'
        }
      }
    })
  ],
  providers: [
PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
