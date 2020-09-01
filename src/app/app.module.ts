import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeElaspePipe } from './Pipes/time-elaspe.pipe';
import { CountTimePassedPipe } from './Pipes/count-time-passed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimeElaspePipe,
    CountTimePassedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
