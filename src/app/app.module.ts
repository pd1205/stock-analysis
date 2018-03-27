import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { MatTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NewsComponent } from './news/news.component';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { StudentComponent } from './student/student.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    HomeComponent,
    HelpComponent,
    PageNotFoundComponent,
    NavbarComponent,
    AnalyticsComponent,
    PortfolioComponent,
    NewsComponent,
    UserCardsComponent,
    StudentComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
