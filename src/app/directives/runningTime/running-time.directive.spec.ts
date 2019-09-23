import { Status } from './../../shared/constants';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RunningTimeDirective } from './running-time.directive';

describe('RunningTimeDirective', () => {
  it(`should return On Time when the timestamp is greater than 0 and less that 300`, () => {
    @Component({
      selector: 'app-test-component',
      template: `
        <div appRunningTime [time]="time"></div>
      `
    })
    class TestComponent {
      public time = 200;
    }
    let componentFixture: ComponentFixture<TestComponent>;
    TestBed.configureTestingModule({
      declarations: [RunningTimeDirective, TestComponent]
    });
    TestBed.compileComponents();
    componentFixture = TestBed.createComponent(TestComponent);
    componentFixture.detectChanges();
    const element = componentFixture.nativeElement.innerText;
    expect(element).toContain(Status.ON_TIME);
  });
});
