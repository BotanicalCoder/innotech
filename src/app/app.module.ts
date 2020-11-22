import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component'
import { HomeComponent } from './home.component'
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RulesComponent } from './rules/rules.component';
import { ContactComponent } from './contact/contact.component';
import { TeamsComponent } from './teams/teams.component';
import { RegisterComponent } from './register/register.component';
import {TeamComponent} from './teams/team.component'
import { TeamDetailComponent } from "./teams/team-details.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ScheduleComponent,
    RulesComponent,
    ContactComponent,
    TeamsComponent,
    RegisterComponent,
    HomeComponent,
    TeamComponent,
    TeamDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'teams', component: TeamsComponent },
      { path: 'rules', component: RulesComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'teams/:id', component: TeamDetailComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
