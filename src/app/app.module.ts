import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountTimePassedPipe } from './Pipes/count-time-passed.pipe';
import { LoadingColorChangeDirective } from './Directives/loading-color-change.directive';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { GitProfileComponent } from './Components/git-profile/git-profile.component';
import { GithubSearchComponent } from './Components/github-search/github-search.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CountTimePassedPipe,
    LoadingColorChangeDirective,
    NavbarComponent,
    GitProfileComponent,
    GithubSearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
