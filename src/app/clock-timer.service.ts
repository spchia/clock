import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

import { ClockDateTime } from './ClockDateTime';

@Injectable({
  providedIn: 'root'
})

export class ClockTimerService {
  clock:ClockDateTime = new ClockDateTime();
  

  constructor() { }

  start(): void{
    timer(0,1000).subscribe((n) => {                              
      let currentTime = new Date();
      let hour = currentTime.getHours();
      let min = currentTime.getMinutes();
      let dayOfWeek = currentTime.toLocaleDateString(navigator.language, {  weekday: 'long' });
      let todayDate = currentTime.toLocaleDateString();
      
      this.clock.updateDigitClock(hour, min, todayDate, dayOfWeek);
      
    });
  }
}
