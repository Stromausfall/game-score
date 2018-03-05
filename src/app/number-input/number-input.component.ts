import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {
  result:number = 0;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.reset();
  }

  add(value:number) {
    this.result += value;
  }

  reset() {
    this.result = 0;
  }

  submit() {
    this.playerService.addPoints(this.result);
    this.result = 0;
  }
}
