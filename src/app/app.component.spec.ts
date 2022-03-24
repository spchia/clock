import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ClockTimerService } from './clock-timer.service';

class MockClockTimerService {
  start(){}
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: ClockTimerService, useClass: MockClockTimerService}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'clock'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('clock');
  });

  it('#ngAfterViewInit should start ClockTimerService', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const service = fixture.debugElement.injector.get(ClockTimerService);
    spyOn(service, 'start'); 
    
    app.ngAfterViewInit();
    expect(service.start).toHaveBeenCalled();
  });
});
