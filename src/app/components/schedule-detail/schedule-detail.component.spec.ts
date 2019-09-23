import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import response from '../../../assets/bus-services-data.json';
import { ScheduleDetailComponent } from './schedule-detail.component';
import { RunningTimeDirective } from 'src/app/directives/runningTime/running-time.directive';
import { By } from '@angular/platform-browser';

describe('ScheduleDetailComponent', () => {
  let component: ScheduleDetailComponent;
  let fixture: ComponentFixture<ScheduleDetailComponent>;
  const testData = 'test';
  const showTest = false;

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
    component.showDetail = showTest;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the detail view', async () => {
    const button = fixture.debugElement.query(By.css('button.toggle-detail'))
      .nativeElement;
    button.click();
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('div.schedule-detail'))
    ).toBeTruthy();
    expect(component.showDetail).not.toEqual(showTest);
  });

  it('should render the table rows', async () => {
    const button = fixture.debugElement.query(By.css('button.toggle-detail'))
      .nativeElement;
    button.click();
    fixture.detectChanges();
    expect(
      fixture.debugElement.queryAll(By.css('.bus-data-row')).length
    ).toEqual(component.schedule.busData.length);
  });

  it('should add a note to the note list', () => {
    component.addNote(testData);
    expect(component.noteList[0]).toEqual(testData);
  });
});
