import { Injectable } from '@angular/core';
import { ScoreDisplayComponent } from './score-display/score-display.component';

@Injectable()
export class PlayerService {
  player1:ScoreDisplayComponent=null;
  player2:ScoreDisplayComponent=null;
  currentPlayer:ScoreDisplayComponent=null;
  nextPlayer:ScoreDisplayComponent=null;

  constructor() { }

  registerScoreDisplay(toRegister:ScoreDisplayComponent) {
    if (this.player1 == null) {
      this.player1 = toRegister;
      toRegister.id = "1";
      this.nextPlayer = this.player1;
    } else {
      this.player2 = toRegister;
      toRegister.id = "2";
      this.currentPlayer = this.player2;

      this.changeToNextPlayer();
    }
  }

  private changeToNextPlayer() {
    let temp:ScoreDisplayComponent = this.currentPlayer;
    this.currentPlayer = this.nextPlayer;
    this.nextPlayer = temp;

    this.currentPlayer.makeActive();
    this.nextPlayer.makeInactive();
  }

  addPoints(points:number) {
    this.currentPlayer.addPoints(points);
    this.changeToNextPlayer();
  }
}
