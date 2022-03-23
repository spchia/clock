import { Component, OnInit } from '@angular/core';

import { ClockTimerService } from '../clock-timer.service';
import { ClockDateTime } from '../ClockDateTime';

@Component({
  selector: 'app-clock-digital',
  templateUrl: './clock-digital.component.html',
  styleUrls: ['./clock-digital.component.css']
})

export class ClockDigitalComponent implements OnInit {
  clock:ClockDateTime;

  constructor(private clockTimerService:ClockTimerService) {
    this.clock = clockTimerService.clock;
  }

  ngOnInit(): void {
    
  }

}
