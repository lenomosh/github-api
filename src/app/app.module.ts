import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeElaspePipe } from './Pipes/time-elaspe.pipe';
import { CountTimePassedPipe } from './Pipes/count-time-passed.pipe';
import { LoadingColorChangeDirective } from './Directives/loading-color-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    TimeElaspePipe,
    CountTimePassedPipe,
    LoadingColorChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
