import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeElaspePipe } from './Pipes/time-elaspe.pipe';
import { CountTimePassedPipe } from './Pipes/count-time-passed.pipe';
import { LoadingColorChangeDirective } from './Directives/loading-color-change.directive';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { GitProfileComponent } from './Components/git-profile/git-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeElaspePipe,
    CountTimePassedPipe,
    LoadingColorChangeDirective,
    NavbarComponent,
    GitProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
