import { Status } from './../../shared/constants';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RunningTimeDirective } from './running-time.directive';

describe('RunningTimeDirective', () => {
  it(`should return On Time when running time is greater than 0 and less that 300`, () => {
    @Component({
      selector: 'app-test-component',
      template: `
        <div appRunningTime [time]="time"></div>
      `
    })
    class TestComponent {
      public time = 100;
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

  it(`should return On Time when running time is less than 0`, () => {
    @Component({
      selector: 'app-test-component',
      template: `
        <div appRunningTime [time]="time"></div>
      `
    })
    class TestComponent {
      public time = -100;
    }
    let componentFixture: ComponentFixture<TestComponent>;
    TestBed.configureTestingModule({
      declarations: [RunningTimeDirective, TestComponent]
    });
    TestBed.compileComponents();
    componentFixture = TestBed.createComponent(TestComponent);
    componentFixture.detectChanges();
    const element = componentFixture.nativeElement.innerText;
    expect(element).toContain(Status.EARLY);
  });

  it(`should return late when running time is greater than 300`, () => {
    @Component({
      selector: 'app-test-component',
      template: `
        <div appRunningTime [time]="time"></div>
      `
    })
    class TestComponent {
      public time = 400;
    }
    let componentFixture: ComponentFixture<TestComponent>;
    TestBed.configureTestingModule({
      declarations: [RunningTimeDirective, TestComponent]
    });
    TestBed.compileComponents();
    componentFixture = TestBed.createComponent(TestComponent);
    componentFixture.detectChanges();
    const element = componentFixture.nativeElement.innerText;
    expect(element).toContain(Status.LATE);
  });

  it(`should return unknown when running time unknown`, () => {
    @Component({
      selector: 'app-test-component',
      template: `
        <div appRunningTime [time]="time"></div>
      `
    })
    class TestComponent {
      public time = 'UNKNOWN';
    }
    let componentFixture: ComponentFixture<TestComponent>;
    TestBed.configureTestingModule({
      declarations: [RunningTimeDirective, TestComponent]
    });
    TestBed.compileComponents();
    componentFixture = TestBed.createComponent(TestComponent);
    componentFixture.detectChanges();
    const element = componentFixture.nativeElement.innerText;
    expect(element).toContain(Status.UNKNOWN);
  });
});
