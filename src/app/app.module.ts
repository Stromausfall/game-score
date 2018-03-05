import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { ScoreDisplayComponent } from './score-display/score-display.component';

import { PlayerService } from './player.service';

@NgModule({
  declarations: [
    AppComponent,
    NumberInputComponent,
    ScoreDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
