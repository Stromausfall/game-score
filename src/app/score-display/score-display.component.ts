import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.css']
})
export class ScoreDisplayComponent implements OnInit {
  allPoints:number[] = [];
  id:string = 'unknown';
  scoreDisplayStyle = 'inactive';
  totalPoints = 0;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.registerScoreDisplay(this);
  }

  makeActive() {
    this.scoreDisplayStyle = 'active';
  }

  makeInactive() {
    this.scoreDisplayStyle = 'inactive';
  }

  addPoints(points:number) {
    this.allPoints.push(points);
    this.totalPoints += points;

    this.moveScrollBarToLastItem();
  }

  private moveScrollBarToLastItem() {
    setTimeout(() => {
      let objDiv = document.getElementById("scoreHolderForPlayer" + this.id);
      objDiv.scrollTop = 2 * objDiv.scrollHeight;
    },
    100);
  }
}
