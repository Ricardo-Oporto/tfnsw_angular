import { RunningTimeDirective } from 'src/app/directives/runningTime/running-time.directive';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleComponent } from './schedule.component';
import { ScheduleDetailComponent } from '../schedule-detail/schedule-detail.component';
import response from '../../../assets/bus-services-data.json';
import { By } from '@angular/platform-browser';

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        ScheduleComponent,
        ScheduleDetailComponent,
        RunningTimeDirective
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    component.scheduleList = response.data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the schedules', () => {
    fixture.detectChanges();
    const de = fixture.debugElement.queryAll(By.css('app-schedule-detail'));
    expect(de.length).toEqual(response.data.length);
  });
});
