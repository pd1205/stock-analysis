import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Help', component: HelpComponent},
  {path: 'News', component: NewsComponent},
  {path: 'Analytics', component: AnalyticsComponent},
  {path: 'Portfolio', component: PortfolioComponent},
  {path: "**", component: PageNotFoundComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
