import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
interval;
intervalIncrement: number;
@Output() intervalIncrementor = new EventEmitter<number>();



  constructor() {
    this.intervalIncrement= 0;
  }

  ngOnInit() {

  }

  startGame() {
    this.interval = setInterval(() => {
       this.intervalIncrementor.emit(++this.intervalIncrement); 
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval)
  }

}
