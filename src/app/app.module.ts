import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import {ChartsModule, WavesModule, ButtonsModule, CarouselModule } from 'angular-bootstrap-md'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialImports} from './material-imports';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './connexion/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesPageComponent } from './LeMaster/services-page.component';
import { WhyPageComponent } from './Forum/why-page.component';
import { StatsPageComponent } from './stats-page/stats-page.component';
import { AboutComponent } from './inscription/about.component';
import { FooterComponent } from './footer/footer.component';
import { BarChartComponent } from './stats-page/bar-chart/bar-chart.component';
import { PieChartComponent } from './stats-page/pie-chart/pie-chart.component';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import { ForumListComponent } from './forum-list/forum-list.component';
import { SingleForumComponent } from './forum-list/single-forum/single-forum.component';
import { ForumFormComponent } from './forum-list/forum-form/forum-form.component';
import {ForumService} from './services/forum.service';

const  appRoutes: Routes = [
  {path: 'auth/signup', component: SignupComponent },
  {path: 'auth/signin', component: SigninComponent },
  {path: 'forum', canActivate: [AuthGuardService], component: ForumListComponent },
  {path: 'forum/new', canActivate: [AuthGuardService], component: ForumFormComponent },
  {path: 'forum/view/:id', canActivate: [AuthGuardService], component: SingleForumComponent },
  {path: '', redirectTo: 'forum', pathMatch: 'full'},
  {path: '**', redirectTo: 'forum'}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    ServicesPageComponent,
    WhyPageComponent,
    StatsPageComponent,
    AboutComponent,
    FooterComponent,
    BarChartComponent,
    PieChartComponent,
    SigninComponent,
    SignupComponent,
    ForumListComponent,
    SingleForumComponent,
    ForumFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImports,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuardService,
    ForumService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
