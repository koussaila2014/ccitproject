import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//import {ChartsModule, WavesModule, ButtonsModule, CarouselModule } from 'angular-bootstrap-md'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialImports} from './material-imports';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatsPageComponent } from './stats-page/stats-page.component';
import { FooterComponent } from './footer/footer.component';

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
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';


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
    StatsPageComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    ForumListComponent,
    SingleForumComponent,
    ForumFormComponent,
    BarChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    PolarChartComponent,
   

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
    RouterModule.forRoot(appRoutes),

  ],
  providers: [
    AuthService,
    AuthGuardService,
    ForumService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
