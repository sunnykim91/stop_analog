import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  template: `
    <div class="stop-watch">
      <div class="display">{{time}}</div>
      <button class="control" (click)="showTime()">{{title}}</button>
    </div>
  `,
  styles: [`
    .stop-watch {
      font-family: 'Source Code Pro', monospace;
      text-align: center;
      font-size: 3em;
      padding: 30px;
    }

    .control {
      width: 300px;
      padding: 5px;
      margin-top: 15px;
      font-size: 36px;
      font-weight: bold;
      border: 2px solid #f44336;
      border-radius: 4px;
      cursor: pointer;
      outline: none;
    }

    .control:hover {
      background: #f44336;
      color: aliceblue;
    }
    `]
})
export class StopwatchComponent {
  time: any = '00:00:00';
  mili: any = 0;
  second: any = 0;
  minute: any = 0;
  timerflag: boolean = false;
  timer: any;
  title: string = 'Start';

  showTime() {
    if (this.timerflag) {
      clearInterval(this.timer);
      this.title = 'Start';
      this.timerflag = false;
    } else {
      this.timer = setInterval(this.startTimer.bind(this), 10);
      this.timerflag = true;
      this.title = 'Stop';
    }
  }

  startTimer() {
    this.mili++;
    if (this.second > 59) {
      this.minute++;
      this.second = 0;
    }
    if (this.mili > 99) {
      this.second++;
      this.mili = 0;
    }
    this.time = `${this.minute < 10 ? '0' + this.minute : this.minute}:${this.second < 10 ? '0' + this.second : this.second}:${this.mili < 10 ? '0' + this.mili : this.mili}`;
  }
}
