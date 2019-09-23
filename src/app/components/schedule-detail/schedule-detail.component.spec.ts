import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import response from '../../../assets/bus-services-data.json';
import { ScheduleDetailComponent } from './schedule-detail.component';
import { RunningTimeDirective } from 'src/app/directives/runningTime/running-time.directive';
import { By } from '@angular/platform-browser';

describe('ScheduleDetailComponent', () => {
  let component: ScheduleDetailComponent;
  let fixture: ComponentFixture<ScheduleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ScheduleDetailComponent, RunningTimeDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDetailComponent);
    component = fixture.componentInstance;
    component.schedule = response.data[0];
    component.showDetail = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the detail view', async () => {
    fixture.detectChanges();
    setTimeout(() => {
      component.showDetail = true;
      const element = fixture.debugElement.queryAll(By.css('.schedule-detail'));
      expect(element.length).toEqual(1);
    }, 0);
  });

  it('should add a note to the note list', () => {
    component.addNote('test');
    expect(component.noteList[0]).toEqual('test');
  });
});
