import { Component } from '@angular/core';

@Component({
  selector: 'app-analogclock',
  template: `
    <div class="clock">
    <div class="analog-clock">
      <div class="hour hand" [ngStyle]="{'transform': hourtransform}"></div>
      <div class="minute hand" [ngStyle]="{'transform': minutetransform}"></div>
      <div class="second hand" [ngStyle]="{'transform': secondtransform}"></div>
      <div class="center-circle"></div>
    </div>
    <div class="digital-clock">{{title}}</div>
  </div>
  `,
  styles: [`
    .analog-clock {
      position: relative;
      margin: 100px auto 0;
      width: 200px;
      height: 200px;
      background-color: aliceblue;
      border-radius: 50%;
    }

    .hand {
      position: absolute;
      left: 50%;
      width: 1px;
      height: 100px;
      /* 자바스크립트에 의해 덮어써진다. */
      /* transform: translate3d(-50%, 0, 0); */
      transform-origin: 100% 100%;
    }

    .hour {
      background-color: #f44336;
    }

    .minute {
      background-color: #3f51b5;
    }

    .second {
      background-color: #9e9e9e;
    }

    .center-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      width: 12px;
      height: 12px;
      background-color: black;
      border-radius: 50%;
    }

    .digital-clock {
      position: absolute;
      top: 350px;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      font-size: 2em;
      font-family: 'Source Code Pro', monospace;
    }
  `]
})
export class AnalogclockComponent {
  title: string = "00:00:00";
  date: any;
  hours: any;
  minutes: any;
  seconds: any;
  hourtransform: any;
  minutetransform: any;
  secondtransform: any;

  
  constructor() {
    setInterval(this.showTime.bind(this), 1000);
  }

  showTime() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    this.title = `${this.hours < 10 ? '0' + this.hours : this.hours}:${this.minutes < 10 ? '0' + this.minutes : this.minutes}:${this.seconds < 10 ? '0' + this.seconds : this.seconds}`;
    
    this.hourtransform = `rotate(${this.hours*360/12}deg)`;
    this.minutetransform = `rotate(${(this.minutes+(this.seconds/60)) / 60 * 360}deg)`;   // 60초가 지나는 동안 분이 6도 움직여    360도니까.  
    this.secondtransform = `rotate(${this.seconds*360/60}deg)`;
  }
}
