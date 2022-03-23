import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { ClockTimerService } from './clock-timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'clock';

  constructor(private clockTimerService:ClockTimerService){}

  ngAfterViewInit(){
      this.clockTimerService.start();
  }

}
